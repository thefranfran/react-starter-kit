# React Starter Kit

Un starter kit performant pour commencer rapidement un projet React avec TypeScript, Vite, et plusieurs outils de développement modernes.

## Table des matières

- [Aperçu du projet](#aperçu-du-projet)
- [Caractéristiques](#caractéristiques)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Arborescence du projet](#arborescence-du-projet)
- [Scripts](#scripts)
- [Tests](#tests)
- [Workflows GitHub Actions](#workflows-github-actions)
- [Conventions de code](#conventions-de-code)
- [Contribution](#contribution)

## Aperçu du projet

Ce projet utilise Vite comme outil de build pour React, avec TypeScript pour le typage statique. Il est prêt pour la production avec une configuration optimisée. Le projet inclut également des outils comme **Zustand** pour la gestion d'état, **React-Router-Dom** pour la navigation, **Tanstack React Query** pour les requêtes API, et **Framer Motion** pour les animations. Il inclut également un environnement de tests via **Vitest** et **@testing-library/react** avec jsdom.

## Caractéristiques

- **Vite** pour des builds ultra-rapides
- **TypeScript** pour un typage statique
- **Zustand** pour la gestion de l'état 
- **React Router** pour la navigation
- **Tanstack React Query** pour la gestion des requêtes API
- **Framer Motion** pour les animations fluides
- **Vitest** pour les tests unitaires et d'intégration
- **GitHub Actions** pour l'intégration continue (CI)
- **ESLint**, **Prettier** et **Commitlint** pour assurer la qualité du code

## Prérequis

- **Node.js** version 16.x ou supérieure
- **pnpm** (géré via `.npmrc` dans le projet)

## Installation

1. Clonez le dépôt :

    ```bash
    git clone https://github.com/votre-repo/starter-kit.git
    cd starter-kit
    ```

2. Installez les dépendances avec `pnpm` :

    ```bash
    pnpm install
    ```

3. Démarrez le serveur de développement :

    ```bash
    pnpm dev
    ```

## Utilisation

Après avoir démarré le serveur de développement, l'application sera disponible à l'adresse [http://localhost:5173](http://localhost:5173).

## Arborescence du projet

Voici l'arborescence des fichiers principaux dans le projet :

.github/
├── workflows/
│   ├── lint-ts.yml
│   ├── test.yml
│   └── type-check.yml
.husky/
node_modules/
public/
src/
├── assets/          # Images, icônes et autres fichiers statiques
├── components/      # Composants réutilisables
├── contexts/        # Contexte React pour la gestion d'état global
├── core/
│   ├── hooks/       # Hooks personnalisés
│   ├── utils/       # Utilitaires et fonctions helper
│   ├── app.tsx      # Entrée principale de l'application
│   ├── navigation.tsx  # Configuration du routage
│   └── providers.tsx   # Fournisseurs pour React Query, Zustand, etc.
├── layouts/         # Layouts génériques de pages
├── pages/           # Pages principales de l'application
├── services/        # Appels API, intégration avec React Query
├── test/            # Tests unitaires avec Vitest
├── ui/              # Composants UI spécifiques
└── main.tsx         # Point d'entrée principal
.env
.env.development
.env.local
.env.production
.eslintrc.js
.gitignore
.prettierrc

## Scripts

Les principaux scripts définis dans le fichier `package.json` :

- `pnpm dev` : Démarre le serveur de développement
- `pnpm build` : Génère une version optimisée pour la production
- `pnpm preview` : Prévisualise l'application en production
- `pnpm lint` : Exécute ESLint pour vérifier la qualité du code
- `pnpm format` : Formate le code avec Prettier
- `pnpm test` : Exécute les tests avec Vitest

## Tests

Les tests sont effectués avec **Vitest** et **@testing-library/react**. Les tests sont définis dans le dossier `test/`.

Pour exécuter les tests, utilisez :

```bash
pnpm test
```

Les tests incluent un environnement jsdom pour simuler un navigateur lors des tests des composants React.

## Workflows GitHub Actions

Le projet utilise plusieurs workflows pour assurer la qualité du code et automatiser les tests :

- **Lint TypeScript** : Vérifie que le code TypeScript respecte les règles définies avec ESLint.
- **Tests** : Exécute les tests avec Vitest.
- **Type-Checking** : Vérifie la validité des types TypeScript.

Ces workflows sont configurés dans le dossier .github/workflows/ et s'exécutent à chaque push.

## Conventions de code

Ce projet suit des conventions strictes pour maintenir une base de code propre et lisible :

- **ESLint** : Utilisé pour appliquer des règles de linting sur le code TypeScript et JavaScript.
- **Prettier** : Utilisé pour formater le code automatiquement.
- **Husky** : Pour exécuter des hooks git avant chaque commit.
- **Commitlint** : Pour imposer une structure de message de commit correcte.
- **lint-staged** : Pour s'assurer que seuls les fichiers modifiés sont lintés et formatés avant les commits.