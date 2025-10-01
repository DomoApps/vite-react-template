# Domo Vite React Template

A modern Vite + React template for building Domo apps with ryuu-proxy integration, Redux Toolkit, TypeScript, and comprehensive development tooling.

## 🚀 Quick Start

The easiest way to use this template is with the Domo CLI:

```bash
npx @domoinc/da new my-app-name
```

This will scaffold a new project using this template with all placeholders properly replaced.

## 📦 What's Included

This template provides a complete development environment for building Domo apps with:

### Core Technologies

- **[Vite](https://vitejs.dev/)** - Lightning fast build tool and dev server
- **[React 18](https://react.dev/)** - Modern React with hooks and concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Redux Toolkit](https://redux-toolkit.js.org/)** - Modern Redux state management
- **[Sass](https://sass-lang.com/)** - CSS preprocessing with modules support

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting and quality
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Vitest](https://vitest.dev/)** - Fast unit testing
- **[Storybook](https://storybook.js.org/)** - Component development and documentation
- **[Husky](https://typicode.github.io/husky/)** - Git hooks for quality gates

### Platform Integration

- **[@domoinc/ryuu-proxy](https://www.npmjs.com/package/@domoinc/ryuu-proxy)** - Local development proxy to Domo instances
- **[ryuu CLI](https://www.npmjs.com/package/ryuu)** - Domo deployment and management tools
- **[@domoinc/da](https://www.npmjs.com/package/@domoinc/da)** - Code generation and project scaffolding

## 🏗️ Template Structure

```text
template/
├── public/                 # Static assets
│   ├── manifest.json      # Domo app manifest
│   └── static/           # Images and icons
├── src/
│   ├── components/        # React components
│   │   ├── App/          # Main app component
│   │   └── Counter/      # Example component with tests/stories
│   ├── reducers/         # Redux slices
│   └── main.tsx          # App entry point
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── eslint.config.js      # ESLint configuration
├── jest.config.js        # Jest configuration
└── README.md            # Detailed usage instructions
```

## 🛠️ Available Scripts

The template includes these npm scripts (examples use `npm`, but works with `yarn` or `pnpm`):

- `npm start` - Start development server with hot reload
- `npm run build` - Build for production
- `npm test` - Run tests in watch mode
- `npm run test:ci` - Run tests once for CI
- `npm run lint` - Lint code
- `npm run format` - Format code with Prettier
- `npm run storybook` - Start Storybook server
- `npm run generate` - Generate new components or Redux slices
- `npm run upload` - Build and upload to Domo instance

## 🔧 Features

### Code Generation

Generate new components and Redux slices with built-in templates:

```bash
npm run generate
```

### Type Safety

Full TypeScript support with strict configuration and custom type definitions for Domo environments.

### Testing

Pre-configured Vitest setup with:

- Component testing utilities
- Custom Jest DOM environment
- Coverage reporting
- CI-friendly output

### Code Quality

Automated code quality with:

- Pre-commit hooks via Husky
- Lint-staged for staged file processing
- Prettier formatting
- ESLint rules for React and TypeScript

### Domo Integration

Seamless integration with Domo platform:

- Manifest file management
- Proxy configuration for local development
- Asset upload and deployment
- Instance-specific overrides

## 📋 Requirements

- **Node.js** >= 16
- **npm**, **yarn**, or **pnpm**

## 🔗 Related

- [@domoinc/da](https://www.npmjs.com/package/@domoinc/da) - Domo Apps CLI
- [@domoinc/ryuu-proxy](https://www.npmjs.com/package/@domoinc/ryuu-proxy) - Development proxy
- [ryuu](https://www.npmjs.com/package/ryuu) - Domo CLI tools
- [Domo Developer Portal](https://developer.domo.com/) - Official docs and API references
