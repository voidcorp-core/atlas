/**
 * Génère les artefacts JSON consommés par le site.
 *
 * Ces fichiers sont servis tels quels par raw.githubusercontent.com : leur
 * forme ne doit pas changer sans coordination avec le site. Ils sont versionnés
 * dans le dépôt, et la CI vérifie qu'ils correspondent bien à la source.
 */
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

import { LOCALES, ROOT, loadCartographies, loadGuides, loadPrompts, loadTools } from './load.mjs'
import { LABELS } from './taxonomy.mjs'
import { VARIABLES } from './variables.mjs'

const byOrder = (a, b) => (a.meta?.order ?? a.order) - (b.meta?.order ?? b.order)

const write = (file, data) => {
  writeFileSync(join(ROOT, file), `${JSON.stringify(data, null, 2)}\n`)
  return data.length
}

const prompts = loadPrompts().sort(byOrder)
const guides = loadGuides().sort(byOrder)
const tools = loadTools().sort((a, b) => a.order - b.order)
const cartographies = loadCartographies().sort(byOrder)

for (const locale of LOCALES) {
  const promptEntries = prompts.map(({ meta, locales }) => ({
    id: meta.id,
    name: locales[locale].data.name,
    hook: locales[locale].data.hook,
    category: meta.category,
    difficulty: meta.difficulty,
    labels: meta.labels,
    description: locales[locale].data.description,
    prompt: locales[locale].body,
    // Chaque variable est livrée prête à l'affichage : le site n'a ni à parser
    // le corps du prompt ni à connaître le vocabulaire du registre.
    variables: meta.variables.map(({ name, type }) => ({
      name,
      type,
      label: VARIABLES[name].label[locale],
      placeholder: VARIABLES[name].placeholder[locale],
    })),
    example_input: locales[locale].data.example_input ?? null,
    example_output: locales[locale].data.example_output ?? null,
    gains: locales[locale].data.gains,
  }))

  const guideEntries = guides.map(({ meta, locales }) => ({
    id: meta.id,
    title: locales[locale].data.title,
    description: locales[locale].data.description,
    category: meta.category,
    content: locales[locale].body,
    readTime: meta.readTime,
    difficulty: meta.difficulty,
    slug: meta.slug,
    date: meta.date,
  }))

  const toolEntries = tools.map((tool) => ({
    id: tool.id,
    name: tool.name,
    link: tool.link,
    category: tool.category,
    description: tool.description[locale],
    why: tool.why[locale],
  }))

  // Une Cartographie est livrée prête à l'emploi : les trois consignes et les
  // axes déjà résolus dans la locale, pour que le site n'ait rien à assembler.
  const cartographieEntries = cartographies.map(({ meta, documents }) => ({
    id: meta.id,
    name: documents.entretien[locale].data.name,
    hook: documents.entretien[locale].data.hook,
    promesse: documents.entretien[locale].data.promesse,
    gains: documents.entretien[locale].data.gains,
    garanties: documents.entretien[locale].data.garanties,
    description: documents.entretien[locale].data.description,
    attribution: documents.entretien[locale].data.attribution ?? null,
    ...(documents.entretien[locale].data.echelle === undefined
      ? {}
      : { echelle: documents.entretien[locale].data.echelle }),
    category: meta.category,
    difficulty: meta.difficulty,
    labels: meta.labels,
    tours: meta.tours,
    axes: meta.axes.map((id) => ({ id, label: documents.entretien[locale].data.axes[id] })),
    entretien: documents.entretien[locale].body,
    carte: documents.carte[locale].body,
    dossier: documents.dossier[locale].body,
  }))

  write(`prompts.${locale}.json`, promptEntries)
  write(`cartographies.${locale}.json`, cartographieEntries)
  write(`guides.${locale}.json`, guideEntries)
  write(`tools.${locale}.json`, toolEntries)

  // Libellés d'affichage du vocabulaire contrôlé, pour que le site n'ait pas à
  // les dupliquer ni à les traduire de son côté.
  writeFileSync(
    join(ROOT, `labels.${locale}.json`),
    `${JSON.stringify(
      Object.fromEntries(Object.entries(LABELS).map(([key, value]) => [key, value[locale]])),
      null,
      2
    )}\n`
  )
}

console.log(`prompts : ${prompts.length}`)
console.log(`cartographies : ${cartographies.length}`)
console.log(`guides  : ${guides.length}`)
console.log(`outils  : ${tools.length}`)
console.log(`artefacts : ${LOCALES.length * 5} fichiers`)
