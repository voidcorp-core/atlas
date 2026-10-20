# Atlas Registry

[![Registry CI](https://github.com/voidcorp-core/atlas/actions/workflows/lint-json.yml/badge.svg)](https://github.com/voidcorp-core/atlas/actions/workflows/lint-json.yml)
[![Locales](https://img.shields.io/badge/locales-fr%20%7C%20en-blue)](#the-bilingual-guarantee)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

The content source behind **[atlas.voidcorp.io](https://atlas.voidcorp.io)** - a bilingual
library of AI prompts and guided interviews for founders and solo operators.

Every resource is published in French and in English. French is where the editorial attention
goes today, but neither locale is a translation afterthought: the CI refuses any change that lets
the two drift apart.

Everything is plain files in git. No CMS, no database, no admin panel. A pull request is the
editing interface, and the review is the quality gate.

---

## What is in here

| Resource | Count | What it is |
| --- | --- | --- |
| **Cartographies** | 1 | Guided interviews. Several turns, a shareable card, then a full report |
| **Prompts** | 33 | Single-shot templates with declared input variables |
| **Guides** | 21 | Long-form markdown articles |
| **Tools** | 22 | Curated AI tools. **Frozen** - see [scope](./CONTRIBUTING.md) |
| **Labels** | 35 | Closed vocabulary shared by every resource |

---

## How it works

```
content/            source of truth, reviewed in pull requests
   │
   │  npm run build
   ▼
*.fr.json           generated artifacts, committed to the repo
*.en.json
   │
   │  raw.githubusercontent.com
   ▼
atlas.voidcorp.io   validated again at build time against Zod schemas
```

The artifacts at the repository root are **generated**. Never edit them by hand - the CI compares
them against the source and fails when they disagree.

### The bilingual guarantee

Anything structural - identifiers, categories, labels, input variables, interview axes - is
declared **once**, in a locale-neutral file. Only display strings are translated.

This is not a stylistic preference. The site generates input forms from these declarations: two
diverging locales would produce two different forms depending on the reader's language. That class
of bug used to affect 14 prompts. It is now structurally impossible, and the CI proves it on every
pull request.

### Cartographies are not prompts

A prompt is a template with holes, filled in once. A **Cartographie** is an interview conducted
over several turns that produces two distinct artifacts: a card meant to be shared, then a
developed report.

It therefore carries three sets of instructions per language - conduct the interview, render the
card, write the report - because those are three separate model calls, not three sections of one
text. Turn ceilings and card axes are declared in metadata so that the cost of an interview is
bounded by construction rather than by convention.

---

## Consuming the data

The artifacts are served directly over `raw.githubusercontent.com`:

```
https://raw.githubusercontent.com/voidcorp-core/atlas/refs/heads/main/prompts.fr.json
https://raw.githubusercontent.com/voidcorp-core/atlas/refs/heads/main/cartographies.en.json
```

Available resources: `prompts`, `cartographies`, `guides`, `tools`, `labels` - each in `.fr.json`
and `.en.json`.

**Stability contract.** Fields may be added; they are not removed and their types do not change
without coordination with the site. Treat the data as untrusted until you have validated it
against your own schema - that is what the site does.

---

## Working on the registry

Requires Node 20 or later.

```bash
npm install
npm run validate   # schemas, controlled vocabulary, locale parity
npm run build      # regenerate the JSON artifacts
npm run check      # both, plus artifact drift detection
```

```
content/
  cartographies/<id>/   meta.json, entretien|carte|dossier × fr|en
  prompts/<id>/         meta.json, fr.md, en.md
  guides/<slug>/        meta.json, fr.md, en.md
  tools/<id>.json
scripts/
  load.mjs              reads the source
  validate.mjs          schemas and controlled vocabulary
  build.mjs             generates the artifacts
  taxonomy.mjs          categories, labels, runtime tokens - all closed sets
  variables.mjs         input variables with their labels in both locales
```

### Versions and changelog

Versions are derived from conventional commit messages by
[release-please](https://github.com/googleapis/release-please). Every push to `main` updates a
standing release pull request; merging it tags the release, writes `CHANGELOG.md` and publishes
the GitHub release. Nothing is committed to `main` behind your back.

The workflow authenticates as a dedicated GitHub App, because the organisation forbids GitHub
Actions from opening pull requests. Two repository secrets are required - `RELEASE_APP_CLIENT_ID`
and `RELEASE_APP_PRIVATE_KEY`. Without them the job is skipped rather than failing.

Tags matter beyond bookkeeping: `ATLAS_REGISTRY_REF` on the site side can point at a tag instead
of `main`, so a broken publication does not reach production on its own.

---

## Contributing

Contributions are welcome, and **[CONTRIBUTING.md](./CONTRIBUTING.md) is worth reading first** -
it states what Atlas accepts and what it does not, so you do not write a pull request for nothing.

The short version: Cartographies, prompts and guides are open. The tools catalogue is frozen.
Submitting your own product is allowed if you disclose it and accept the same bar as everyone else.

---

## License

MIT - see [LICENSE](./LICENSE).
