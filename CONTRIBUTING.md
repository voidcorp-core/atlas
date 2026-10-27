# Contributing to Atlas

The goal is a registry that is useful and actually used, not an endless directory.
An entry that adds nothing new will be declined, however well written.

## Editorial scope

Read this section before opening a pull request. It will save you from writing for nothing.

**Atlas is for founders and solo operators**, across two connected areas: understanding yourself
(introspection, positioning, energy) and moving your business forward (validation, pricing,
distribution). It is published in French and in English; the French audience is the one it
currently reaches.

### Open to contributions

- **Cartographies** - the guided interviews. This is the core of the product and where a
  contribution carries the most value.
- **Prompts** - always welcome when they bring something the registry does not already have.
- **Guides.**

### Not open

- **The tools catalogue is frozen.** No new tool is accepted. This is not a judgement on the
  products submitted: the catalogue creates recurring maintenance for almost no usage, and Atlas
  is refocusing on interviews. Existing entries are still served, they are no longer extended.
- **Anything outside a founder's work** - entertainment, consumer visual creation, narrow
  technical tools with no link to the promise.
- **Any tool whose primary use is to deceive someone** - impersonating another person,
  fabricating a document or an image presented as authentic, defeating an identity check.
  Whatever the publisher's intent, listing these commits the Atlas name.

### Submitting your own product

This is allowed, on two conditions: **disclose it explicitly in the pull request**, and accept
being judged by the same criterion as everything else - does it bring something the registry does
not already have. An honest, well-made contribution can still be declined on scope. That is not a
reproach.

## Requirements

```bash
npm install
```

Node 22 or later. Node 24 is recommended and used in CI (`.nvmrc`).

## Where the content lives

The source of truth is the `content/` directory. The JSON files at the repository root
(`prompts.fr.json`, `tools.en.json`, …) are **generated**: never edit them by hand, they would be
overwritten on the next build.

```
content/
  cartographies/<id>/
    meta.json           structure: category, labels, axes, turn bounds
    entretien.fr.md     interview template + presentation strings
    entretien.en.md
    carte.fr.md         instructions for the Card
    carte.en.md
    dossier.fr.md       instructions for the Report
    dossier.en.md
  prompts/<id>/
    meta.json           structure: category, difficulty, labels, variables
    fr.md               French strings (frontmatter) + prompt body
    en.md               English strings (frontmatter) + prompt body
  guides/<slug>/
    meta.json, fr.md, en.md
  tools/<id>.json       frozen, see "Editorial scope"
```

This separation is deliberate: what is structural exists once and therefore cannot diverge between
languages, while what is written exists in both.

## Adding a prompt

1. Create `content/prompts/<id>/` - the identifier is lowercase, words separated by `_` or `-`,
   and must match the directory name.

2. `meta.json`:

```json
{
  "id": "my_prompt",
  "category": "business",
  "difficulty": "intermediate",
  "order": 33,
  "labels": ["validation", "pricing"],
  "variables": [
    { "name": "BUSINESS", "type": "textarea" },
    { "name": "USERDATA", "type": "textarea" }
  ]
}
```

- `category` and `labels` draw from the vocabulary in `scripts/taxonomy.mjs`. No free-form terms
  are accepted: if a label is missing, add it to the taxonomy in the same pull request and explain
  why the existing ones do not fit.
- `variables` draws from `scripts/variables.mjs`. A variable absent from that table must be added
  there with its labels and examples in both languages.
- `order` positions the prompt in the site's listings.

3. `fr.md` and `en.md`:

```markdown
---
name: Prompt name
hook: One sentence stating the benefit
description: What the prompt does.
gains: What the reader concretely walks away with.
example_input: "{{BUSINESS}}: a six-person design agency"
example_output: |-
  The expected result, abbreviated.
---

ROLE:
…

CONTEXT:
…

GOAL:
…

FORMAT:
…

INSTRUCTIONS:
…

RULES:
…

{{BUSINESS}}

{{USERDATA}}
```

That six-section shape is the convention for new prompts. It keeps them readable and easy to wire
into an agent or a workflow.

## Adding a Cartographie

A Cartographie is not a prompt. A prompt is a template with holes, filled in once. A Cartographie
is an **interview conducted over several turns**, producing two artifacts: a shareable Card, then
a developed Report.

Hence three documents per language, because those are three distinct model calls: conduct the
interview, render the Card, write the Report.

1. `meta.json`:

```json
{
  "id": "my_cartographie",
  "category": "introspection",
  "difficulty": "beginner",
  "order": 1,
  "labels": ["positioning"],
  "tours": { "min": 8, "max": 40 },
  "axes": ["passion", "talent", "mission", "profession"]
}
```

- `tours` bounds the interview. The ceiling bounds cost by construction; the floor prevents a
  premature conclusion.
- `axes` is the structure of the card. The identifiers are declared **here only**; only their
  display labels are translated, in the frontmatter of each `entretien.<locale>.md`. Without this,
  a card would change shape depending on the language.

2. `entretien.fr.md` and `entretien.en.md`:

```markdown
---
name: Name of the Cartographie
hook: One sentence stating the benefit
promesse: >-
  What the person will learn, what they will be able to do, what it costs them
  in time, and the tension they already suspect.
description: What the Cartographie does.
axes:
  passion: Passion
  talent: Talent
---

The interview template: what the model is looking for, how it runs each turn,
its rules, its calibration, and when it stops.
```

The **promise** is the conversion point: an interview costs the reader twenty minutes, and nobody
invests that without knowing what they get. A hollow promise is not rescued by a good interview,
because the interview will not happen. The CI enforces a minimum length for that reason.

3. `carte.fr.md`, `carte.en.md`, `dossier.fr.md`, `dossier.en.md`: the synthesis instructions,
   with a frontmatter reduced to `titre`.

### Runtime tokens

The interview template receives values injected on every turn. The vocabulary is **closed**, like
the one for variables, and for the same reason: a misspelled token would be read as an instruction
by the model, and the interview would drift with nothing to signal it.

| Token | Role | Required |
| --- | --- | --- |
| `{{TOURS_MAX}}` | Turn ceiling | yes |
| `{{TOUR_COURANT}}` | Current turn | yes |
| `{{CARTE_PRECEDENTE}}` | Card state at the previous turn | yes |
| `{{TOURS_MIN}}` | Floor before concluding | no |

The first three are required in every template: without them an interview has neither bounds nor
memory.

## Rules on variables

- `{{…}}` is **strictly reserved for user input**. To show a field to personalise inside an example
  output, use square brackets: `[FirstName]`, `[Company]`.
- Both languages must use **exactly the same variables**. The CI checks this, because the site
  generates a form from them: different variables would produce different forms depending on the
  language.
- `{{USERDATA}}` closes every prompt that expects input.

## Before opening a pull request

```bash
npm run validate   # schemas, vocabulary, locale parity
npm run build      # regenerate the JSON artifacts
```

Commit the regenerated artifacts: the CI verifies that they match the source.

## Commit convention

Conventional commits, read by `git-cliff`:
`feat:` `fix:` `doc:` `perf:` `refactor:` `chore:`

## A note on language

The registry's public documentation is in English so that anyone can contribute. **The content
itself is bilingual**: every resource must be provided in French and in English, and neither is a
translation afterthought. French is the audience the project currently reaches, and the French
wording is the one that gets the most editorial attention.

## Working on an interview template

Prompt engineering is done on comparable outputs, not on impressions. The
registry ships a harness for that.

```bash
npm run comparer diagnostic-alignement                                  # current template
npm run comparer diagnostic-alignement -- --variantes courant,origine   # side by side
npm run comparer diagnostic-alignement -- --fixture dev-infra --tours 3
```

It requires `ANTHROPIC_API_KEY` in the environment. Each run costs a few cents.

**Variants** live in `content/cartographies/<id>/variantes/<name>.fr.md`. They
are frozen alternatives kept for comparison — `origine.fr.md` holds the original
Ikigai prompt, which accounted for 53% of the registry's copies and remains the
reference any evolution is measured against. A variant without runtime tokens is
played in free-text mode.

**Fixtures** live in `fixtures/<name>.json`: a set of scripted answers, so two
templates face exactly the same person.

The harness reports **form defects** — menus, missing spaces before double
punctuation, em dashes, multiple questions, a mirror repeating its own question,
emoji. These are counted, not judged. Quality of substance still requires
reading the output.
