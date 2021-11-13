# Hands on tdd, akwaaba festival edition

Le TDD (Test Driven Development - Développement Guidé par le Test) est une gymnastique qui devient un réflexe avec la pratique.
Le but de ce hands-on est de nous familiariser avec cette méthode de développement.

## Installation pré-requise

[Node, contexte d'exécution](https://nodejs.org/en/download/)\
Ce projet a été généré avec le script `create-react-app`. Pour en savoir plus: [READCREATEREACTAPP.md](./READCREATEREACTAPP.md)

## Clôner le repo Github

Depuis ton IDE (Integrated Development Environment - Environnement de développement), ouvre ton terminal à l'emplacement où tu veux sauvegarder le projet.

```
cd [mon emplacement]
```

```
git clone https://github.com/Goumies/akwaaba-festival-hands-on-rainbow-tdd.git
```

## Installation des dépendances du projet

```
yarn install
```

## Avant de commencer

Pour garder ton contenu, en local, je te conseille de créer une branche à chaque entraînement que tu fais sur ce kata :

```
git checkout -b [Ta branche dédiée]
```

## Un projet pour pratiquer

Tu y trouveras :

- Les concepts abordés : 
  le cycle du TDD, le Principe de Responsabilité Unique (Single Responsibility Principle), AAA (Arrange, Act, Assert)
- Le code de production
- Le code de test

## Lancement des tests

[Jest, test runner](https://jestjs.io/docs/en/getting-started.html)

```
yarn test
```

## Les concepts-clés 
Les concepts abordés sont détaillés dans [CONCEPTS.md](./CONCEPTS.md)

## Le kata : Rainbow maker
Pour la présentation du kata, tout est dans [RAINBOWMAKER.md](./RAINBOWMAKER.md)
Les fichiers à modifier sont :
- checker.js, pour le code de production
- checker.test.js, pour le code de test
- RulesList.js, pour rendre l'interface graphique dynamique(*)

(*) Pour supprimer la première couleur, cliques sur "Shift". Pour réinitialiser l'arc-en-ciel, cliques sur "Reset".
