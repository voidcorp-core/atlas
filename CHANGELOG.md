# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

## [3.1.0](https://github.com/voidcorp-core/atlas/compare/v3.0.1...v3.1.0) (2026-10-30)


### Ajouté

* **registre:** integrate Ethos sources as unpublished drafts ([#46](https://github.com/voidcorp-core/atlas/issues/46)) ([f7d7a83](https://github.com/voidcorp-core/atlas/commit/f7d7a83a5d3add5ce22b40c681393ffeedd2ce19))


### Corrigé

* **content:** preserve ethos claims and their factual premises ([7ff71da](https://github.com/voidcorp-core/atlas/commit/7ff71daed54ca58295ae2bbe2f085529851a0d3a))
* **registry:** withhold draft ethos from public catalogs ([ab4e886](https://github.com/voidcorp-core/atlas/commit/ab4e8861a1c4a39e7593b2aab4b415139bf963a2))

## [3.0.1](https://github.com/voidcorp-core/atlas/compare/v3.0.0...v3.0.1) (2026-10-29)


### Corrigé

* **content:** correct unsupported claims and bilingual guidance ([8a24f7b](https://github.com/voidcorp-core/atlas/commit/8a24f7b7b13709e612beceae0d99c69771ee01b6))
* **content:** keep contradiction follow-ups open ([4e85d2b](https://github.com/voidcorp-core/atlas/commit/4e85d2b8bafcb90c0501fde21ba3bacdda8b001a))
* **registry:** integrate verified bilingual content and validation fixes ([#45](https://github.com/voidcorp-core/atlas/issues/45)) ([457d9ba](https://github.com/voidcorp-core/atlas/commit/457d9bad33bad5fefaafe66e4c67438b521fd3e1))
* **workflow:** aligner le registre sur npm et contrôler les dépendances ([8dcb8e4](https://github.com/voidcorp-core/atlas/commit/8dcb8e429581d8ed0984536d0da023ae0c9e4204))


### Documentation

* pointer le README vers voidcorp-core/atlas ([74f42c3](https://github.com/voidcorp-core/atlas/commit/74f42c356c683eb537f32aee8f399dd894675702))
* pointer le README vers voidcorp-core/atlas ([a281e62](https://github.com/voidcorp-core/atlas/commit/a281e6254183129c9bf8c1c09ee6c6eb362588d6))

## [3.0.0](https://github.com/atlas-registry/atlas/compare/v2.1.0...v3.0.0) (2026-08-28)


### ⚠ BREAKING CHANGES

* l'identifiant « raison-detre » devient « diagnostic-alignement ». Tout consommateur epingle sur l'ancien id ne trouve plus la Cartographie. Cote site, la montee de REGISTRY_VERSION doit partir avec la redirection 301 de /cartographies/raison-detre.

### Ajouté

* renommer la Cartographie en Diagnostic d'alignement ([a8e8079](https://github.com/atlas-registry/atlas/commit/a8e80799adbcb4df62032ab43146ebfd873a03bb))

## [2.1.0](https://github.com/atlas-registry/atlas/compare/v2.0.0...v2.1.0) (2026-08-27)


### Ajouté

* **cartographies:** retirer la duree de la promesse et du troisieme gain ([35defae](https://github.com/atlas-registry/atlas/commit/35defaee7e085c0165f8a5f40320e15761c2525f))
* **cartographies:** tourner le troisieme gain de Raison d'Etre en positif ([4f8bc98](https://github.com/atlas-registry/atlas/commit/4f8bc98de15ce58ccff9190bb8d21ae9cfad8b78))
* **cartographies:** tourner le troisième gain de Raison d'Être en positif ([78777d0](https://github.com/atlas-registry/atlas/commit/78777d087348586824c609230597b1e31e3bcdbf))

## [2.0.0](https://github.com/atlas-registry/atlas/compare/v1.1.0...v2.0.0) (2026-08-20)


### ⚠ BREAKING CHANGES

* **prompts:** le prompt ikigai-archeologie ne figure plus dans les artefacts du registre. Tout consommateur qui le lit par son identifiant doit basculer sur la Cartographie raison-detre.

### Ajouté

* **prompts:** retirer ikigai-archeologie au profit de la Cartographie ([1b25fb3](https://github.com/atlas-registry/atlas/commit/1b25fb3dba19f213342bb43cece24a540178c96a))

## [1.1.0](https://github.com/atlas-registry/atlas/compare/v1.0.0...v1.1.0) (2026-08-20)

Première version publiée. Le dépôt vivait depuis novembre 2025 sans être
versionné : cette entrée reprend son histoire, dédoublonnée à la main - les
mêmes livraisons y figuraient jusqu'à trois fois, séquelles de rebases. Les
versions suivantes ne couvriront que les commits depuis le tag précédent et
n'auront pas besoin de ce traitement.

### Ajouté

* **cartographies:** collection dédiée aux entretiens conduits ([8acd956](https://github.com/atlas-registry/atlas/commit/8acd9560deeec41f71052c55dd966d9264f02346))
* **raison-detre:** une promesse qui montre ce qu'on y gagne ([9c725bb](https://github.com/atlas-registry/atlas/commit/9c725bb7caa9c20931960d4be7dbbe125e370441))
* **raison-detre:** confier l'ouverture de l'entretien au gabarit ([78595bf](https://github.com/atlas-registry/atlas/commit/78595bfc71b1e0f880a68ae48703204dd5ec0d68))
* **registre:** harnais de comparaison de gabarits et variante d'origine ([f6edebb](https://github.com/atlas-registry/atlas/commit/f6edebb8c455c58e8d51c39f19ebe40583b07ed0))
* quinze prompts et quinze guides, en français et en anglais ([cee06af](https://github.com/atlas-registry/atlas/commit/cee06afdd3c299b8c949673a32e68a9842f6a6d2))
* prise en charge des deux locales dans le registre ([0df2b5c](https://github.com/atlas-registry/atlas/commit/0df2b5cd5700f97e3c6dc1b3d9ea1408f2c380e7))
* prompts « Content Autopsy » et « Founder Energy Audit » ([46d9974](https://github.com/atlas-registry/atlas/commit/46d99741609d33be7befd09554af84625e18faca))
* prompt de stratégie de marque personnelle ([f8fd270](https://github.com/atlas-registry/atlas/commit/f8fd27016b92053c1c0b67fb6b2a51de2c5ed923))
* guide et prompt de publication LinkedIn ([f9c9c04](https://github.com/atlas-registry/atlas/commit/f9c9c043b7270f15a7a70c000de519f23e619fe1))
* guide ikigai pour entrepreneurs ([a2df1b8](https://github.com/atlas-registry/atlas/commit/a2df1b88923cf0ea7ce670f673785ade576d82dd))
* premiers guides français sur le prompt engineering et les agents MCP ([3defdd0](https://github.com/atlas-registry/atlas/commit/3defdd029dc61cd4cd8ffabf92d1c766420c0d2e))
* liens vers les outils du catalogue ([e6551ae](https://github.com/atlas-registry/atlas/commit/e6551aeea5b6afb6a747e9b80246af857095b000))

### Corrigé

* **raison-detre:** rendre la relance structurellement obligatoire ([d4570e4](https://github.com/atlas-registry/atlas/commit/d4570e4b317a674cb6e3d3451275b1e54279774a))
* **raison-detre:** interdire le miroir bégayant et la double question ([b6d81d2](https://github.com/atlas-registry/atlas/commit/b6d81d206eb4b5ecd6a31e772891f43bf5cfaa45))
* **raison-detre:** la relance teste l'hypothèse au lieu de collecter des faits ([56b4297](https://github.com/atlas-registry/atlas/commit/56b4297d057e438942c3ec5caad9a0e40a91bd7f))
* **raison-detre:** restaurer le répertoire de questions et bannir les cadratins ([2e56778](https://github.com/atlas-registry/atlas/commit/2e56778c1336c599979abb785894bc01512f4886))
* **ci:** rendre la garde du workflow de publication valide ([b39fbfe](https://github.com/atlas-registry/atlas/commit/b39fbfe0cb535b1c12ac61b520b5169e08021d6f))
* aligner les identifiants des guides sur ceux des prompts ([e5fc70c](https://github.com/atlas-registry/atlas/commit/e5fc70cbf584d385f630d56f71a2551c0403dd64))

### Performance

* **raison-detre:** réduire le gabarit de 12 000 à 4 300 caractères ([e92406e](https://github.com/atlas-registry/atlas/commit/e92406e30441d40dd15d28cf78eda10cf7342f02))

### Refactoring

* **registre:** source structurée, vocabulaire contrôlé et validation ([#27](https://github.com/atlas-registry/atlas/issues/27)) ([97b2606](https://github.com/atlas-registry/atlas/commit/97b26067ec53288d609168d99452208461e55eda))
* révision des guides, des prompts et du catalogue d'outils ([1361498](https://github.com/atlas-registry/atlas/commit/1361498e0cc20a78096e6958a9024cefe29f57d0))

### Documentation

* **contributing:** périmètre éditorial explicite et guide des Cartographies ([fc0a44f](https://github.com/atlas-registry/atlas/commit/fc0a44fa0a816f41041b35cda018fc90ff03b3a6))
* passer la documentation publique en anglais et la remettre à niveau ([6a8ef25](https://github.com/atlas-registry/atlas/commit/6a8ef25724ca0a94aee714e1485c33b4dbd6e644))
