# Ethos evaluation fixtures

Six synthetic editorial scenarios, paired in French and English. They are inputs and review criteria, not observed model outputs or evidence that Ethos works.

- `riche`: two concrete projects, described records, explicit limits and no measured commercial impact.
- `debutant`: one training exercise, limited feedback, no paying clients or validated demand.
- `contradiction`: a withdrawn sales claim, concurrent promotion, a corrected working-method claim and a privacy boundary.

Each JSON has `id`, `locale`, `cartographie`, `synthetic`, `description`, `echanges` and `attentes`. Exchanges contain an authored `question` and `reponse`. Their one-based order is the transcript turn number for quotations. Questions are scenario scaffolding, not measured model responses. French and English preserve the same facts; quotations must match the language actually supplied.

For Card and Report evaluation, use the complete numbered transcript with the production templates and schemas. For interview evaluation, use a transcript prefix and request the next production turn; do not pretend a scripted later answer responded to a different generated question. Record model, template revision, locale, inputs and actual outputs. Review `faits_a_conserver`, `affirmations_interdites` and `criteres` against each actual output. Distinguish missing information from false claims; do not force a target score.

These fixtures do not use the older French-only `comparer` answer format. Use the site's production evaluation runner. Running validation or building the registry does not call a model or evaluate these scenarios. Actual model evaluation is separate and incurs API costs.

Coverage is deliberately limited: these three cases do not establish distress handling, prompt-injection resistance, zero usable quotations or explicit stopping. Those require separate cases before claiming such behavior has been evaluated.
