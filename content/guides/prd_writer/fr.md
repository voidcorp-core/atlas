---
title: Rédiger un PRD clair et actionnable
description: Le guide pour écrire des Product Requirements Documents qui éliminent l'ambiguïté entre product et dev.
---

# Rédiger un PRD clair et actionnable

Un PRD (Product Requirements Document) est le contrat entre le product manager et l'équipe de développement. Quand le PRD est flou, les devs interprètent. Quand les devs interprètent, le produit livré ne correspond pas à la vision.

Un bon PRD ne laisse pas de place à l'interprétation sur le "quoi", tout en laissant de la liberté sur le "comment".

## Pourquoi c'est important

Sans PRD, chaque fonctionnalité est une négociation en temps réel. Les specs changent en cours de sprint, les développeurs découvrent des cas limites non prévus, et tout le monde perd du temps. Le PRD est un investissement de 2-3 heures qui en économise 20.

## Le processus

### Étape 1 -- Définir le problème

Avant de décrire la solution, écris clairement le problème utilisateur que tu résous. Inclus : qui est concerné, quelle est la douleur, quelle est la fréquence, quel est l'impact. Si tu ne peux pas articuler le problème, tu n'es pas prêt à écrire un PRD.

### Étape 2 -- Écrire les user stories

Format standard : "En tant que [persona], je veux [action] afin de [bénéfice]". Chaque user story doit être indépendante, testable et priorisée (must-have, should-have, nice-to-have).

### Étape 3 -- Définir les critères d'acceptation

Pour chaque user story, écris les conditions précises qui déterminent si la fonctionnalité est correctement implémentée. Format : "Étant donné [contexte], quand [action], alors [résultat attendu]". C'est la partie la plus importante du PRD.

### Étape 4 -- Documenter les cas limites

Que se passe-t-il si l'utilisateur a un champ vide ? Si la connexion tombe ? Si les données dépassent la limite ? Les cas limites non documentés deviennent des bugs en production.

## Erreurs courantes

- PRD trop vague : "le système doit être rapide" n'est pas une spec. "Le temps de chargement doit être inférieur à 2 secondes" en est une
- PRD trop détaillé sur le "comment" : ne prescris pas l'architecture technique, laisse les devs décider de l'implémentation
- Pas de critères d'acceptation : sans CA, impossible de savoir si la feature est "finie"
- PRD écrit sans consulter les devs : implique l'équipe technique en amont pour identifier les contraintes

## Aller plus loin

Utilise le prompt Atlas dédié pour générer un PRD structuré et complet :

[PRD Writer](/prompts/prd_writer)

---

*Ce guide fait partie de la série Dev Builder sur Atlas.*
