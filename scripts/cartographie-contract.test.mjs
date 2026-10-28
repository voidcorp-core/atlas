import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { cpSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { test } from 'node:test'

import { ROOT } from './load.mjs'

function fixture(t) {
  const directory = mkdtempSync(join(tmpdir(), 'atlas-contract-'))
  t.after(() => rmSync(directory, { recursive: true, force: true }))
  for (const name of ['scripts', 'content']) cpSync(join(ROOT, name), join(directory, name), { recursive: true })
  symlinkSync(join(ROOT, 'node_modules'), join(directory, 'node_modules'), 'dir')
  return directory
}

function setScale(directory, locale, scale) {
  const path = join(directory, 'content/cartographies/diagnostic-alignement', `entretien.${locale}.md`)
  const source = readFileSync(path, 'utf8')
  writeFileSync(path, source.replace('---\n', `---\nechelle: ${JSON.stringify(scale)}\n`))
}

function run(directory, script) {
  return spawnSync(process.execPath, [join(directory, 'scripts', script)], {
    encoding: 'utf8', timeout: 10_000, maxBuffer: 1024 * 1024,
  })
}

function cartographie(directory, locale) {
  return JSON.parse(readFileSync(join(directory, `cartographies.${locale}.json`), 'utf8'))
    .find(({ id }) => id === 'diagnostic-alignement')
}

test('publishes each localized scale without dropping its explanation', (t) => {
  const directory = fixture(t)
  const scales = {
    fr: { libelle: 'Étayage du récit', description: 'Une interprétation des éléments racontés.' },
    en: { libelle: 'Support in your account', description: 'An interpretation of reported evidence.' },
  }
  for (const locale of ['fr', 'en']) setScale(directory, locale, scales[locale])
  assert.equal(run(directory, 'validate.mjs').status, 0)
  const build = run(directory, 'build.mjs')
  assert.equal(build.status, 0, build.stderr)
  for (const locale of ['fr', 'en']) assert.deepEqual(cartographie(directory, locale).echelle, scales[locale])
})

test('keeps existing Cartographies valid and omits an absent scale', (t) => {
  const directory = fixture(t)
  assert.equal(run(directory, 'validate.mjs').status, 0)
  assert.equal(run(directory, 'build.mjs').status, 0)
  assert.equal(Object.hasOwn(cartographie(directory, 'fr'), 'echelle'), false)
  assert.equal(Object.hasOwn(cartographie(directory, 'en'), 'echelle'), false)
})

for (const [name, scale] of [
  ['null', null],
  ['missing description', { libelle: 'Étayage' }],
  ['non-text label', { libelle: 10, description: 'Un récit' }],
  ['blank description', { libelle: 'Étayage', description: '   ' }],
]) {
  test(`rejects a scale with ${name}`, (t) => {
    const directory = fixture(t)
    for (const locale of ['fr', 'en']) setScale(directory, locale, scale)
    const validation = run(directory, 'validate.mjs')
    assert.equal(validation.status, 1, validation.stderr)
    assert.match(validation.stderr, /echelle/)
  })
}

test('rejects a scale explained in only one language', (t) => {
  const directory = fixture(t)
  setScale(directory, 'fr', { libelle: 'Étayage', description: 'Une lecture du récit.' })
  const validation = run(directory, 'validate.mjs')
  assert.equal(validation.status, 1, validation.stderr)
  assert.match(validation.stderr, /[ée]chelle|echelle/)
})
