# SmartStart SaaS React

SmartStart is a modern landing page generation platform built with React and TypeScript.

The project allows users to create, manage and preview marketing landing page projects based on predefined templates.

This project was built as a portfolio project to demonstrate modern React development, TypeScript, state management, API integration, form handling, authentication and scalable frontend architecture.

## Features

- User authentication
- Protected routes
- Landing page generator
- Template gallery
- Template details
- Project creation and editing
- Project dashboard
- Project status management
- Project deletion
- Landing page preview
- Form validation
- Responsive UI
- Loading and error states
- Lazy-loaded routes
- Error boundary
- Persistent project data with Supabase

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- React Hook Form
- Zod
- Zustand
- TanStack Query
- Axios
- Supabase
- SCSS
- BEM
- Git
- GitHub
- Vercel

## Architecture

The project follows a feature-based architecture designed to keep the application scalable and maintainable.

```text
src/
├── app/
│   ├── router/
│   └── providers/
│
├── features/
│   ├── auth/
│   ├── generator/
│   ├── projects/
│   └── templates/
│
├── pages/
│   ├── Dashboard/
│   ├── Generator/
│   ├── Login/
│   ├── Register/
│   ├── Templates/
│   └── Preview/
│
└── shared/
    ├── components/
    ├── hooks/
    ├── lib/
    └── types/