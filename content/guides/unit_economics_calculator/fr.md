---
title: Comprendre et calculer ses unit economics
description: Calcule ce que chaque client rapporte, distingue revenus et marge, et repère les données qui manquent avant de décider.
---

# Comprendre et calculer ses unit economics

Un chiffre d'affaires qui augmente ne dit pas ce qu'il reste après avoir acquis et servi les clients. Les unit economics servent à éclairer cette question, à condition de préciser les coûts, la période et les hypothèses. Elles ne remplacent pas le suivi de trésorerie.

## 1. Définir le périmètre avant de calculer

Choisis une période et un groupe de clients comparables. Sépare les dépenses d'acquisition, les coûts de service et les autres charges. Un coût moyen par client n'est pas forcément variable : un abonnement serveur peut rester fixe jusqu'au prochain palier.

Classe chaque coût une seule fois dans le calcul concerné. Si une dépense manque, note « inconnue », jamais zéro. Distingue aussi les chiffres observés des scénarios que tu veux tester.

## 2. Calculer un CAC complet

**CAC = dépenses de vente et marketing / nouveaux clients acquis.** Inclus la publicité, les salaires ou le temps consacré à l'acquisition, les prestataires et les outils concernés. Vérifie que la période reflète ton cycle de vente.

Diviser seulement les dépenses publicitaires par tous les nouveaux clients ne donne ni un CAC complet ni celui du canal publicitaire. Sans nouveaux clients, le CAC de la période n'est pas calculable.

## 3. Calculer une LTV sur marge

Ici, la LTV désigne la marge attendue sur la durée de la relation, pas le chiffre d'affaires cumulé.

**Marge mensuelle par client = revenu mensuel par client - coûts de service mensuels par client.**

Pour des clients comparables, avec une marge et un churn clients mensuel positifs et constants, sans expansion :

**LTV sur marge ≈ marge mensuelle par client / churn clients mensuel.**

Exemple fictif : 100 euros de revenu mensuel, 40 euros de coûts de service et 5 % de churn donnent une marge de 60 euros, puis une LTV estimée de 60 / 0,05 = 1 200 euros. Ce calcul n'établit pas que les clients resteront effectivement vingt mois. Avec peu d'historique ou un churn nul, ne produis pas une LTV infinie : examine les marges cumulées des cohortes observées.

## 4. Calculer le délai de récupération

**Délai sur marge = CAC / marge mensuelle par client.** Dans l'exemple fictif, un CAC complet de 300 euros donne 300 / 60 = 5 mois. Le ratio LTV/CAC vaut 1 200 / 300 = 4.

Ces résultats dépendent des hypothèses précédentes. Ils ne prouvent pas la rentabilité globale et ne suffisent pas pour augmenter le budget d'acquisition. Compare le délai à ta trésorerie et à la rétention observée. Si la marge est nulle ou négative, ce calcul ne donne aucun délai fini de récupération.

## 5. Garder le seuil de rentabilité séparé

**Clients nécessaires = charges fixes mensuelles / (revenu mensuel par client - coût variable mensuel par client)**, arrondi à l'entier supérieur.

Les charges fixes ne doivent pas être déjà déduites dans le dénominateur. Il faut donc distinguer coûts fixes et variables, plutôt que réutiliser automatiquement la marge calculée plus haut. Si la contribution par client est nulle ou négative, aucun seuil fini ne résulte de cette formule. Si les charges manquent, laisse le résultat non calculable.

## Le prochain contrôle utile

Refais les calculs avec un churn ou un coût d'acquisition moins favorable, sans présenter ce scénario comme une prévision. Par exemple, passer de 4 % à 2,5 % de churn multiplie la LTV par 1,6 à marge constante, pas par deux. Identifie ensuite la donnée manquante qui changerait le plus ta décision.

Pour approfondir la distinction entre chiffre d'affaires et marge dans la récupération du CAC : [SaaS Metrics Framework, Updata Partners](https://updata.com/white-paper/saas-metrics-framework/). Les seuils proposés dans ce cadre ne constituent pas des verdicts universels.

[Calculer avec le prompt Unit Economics Calculator](/prompts/unit_economics_calculator)
