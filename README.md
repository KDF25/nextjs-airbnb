# Airbnb

Welcome to **Airbnb** – a modern and fully functional vacation rental platform built with Next.js and TypeScript.

## Features

- **Next.js** ⚡ - A powerful React framework for server-side rendering and static site generation.
- **TypeScript** 🛡️ - Statically typed JavaScript for better code reliability.
- **Tailwind CSS** 🎨 - A utility-first CSS framework for rapid styling.
- **Prisma** 🗂️ - ORM for database management and seamless integration.
- **React Hook Form** 📋 - Form management with validation.
- **Zustand** 🔧 - Lightweight state management solution.
- **Framer Motion** 🎬 - Smooth animations for enhanced user experience.
- **Leaflet & React Leaflet** 🗺️ - Interactive maps for location-based services.
- **React Toastify** 🔔 - Toast notifications for user interactions.
- **NextAuth.js** 🔑 - Authentication with Google, GitHub, and Facebook.
- **Cloudinary** ☁️ - Image upload and optimization.

## Authentication & Registration

- **OAuth Authentication**: Users can log in using **Google, GitHub, and Facebook** accounts.
- **Email Verification**: Users receive a confirmation email after registration.

## Database Hosting

- **PostgreSQL with Prisma**: Database management via Prisma ORM.
- **Neon** 🚀 - Cloud-based PostgreSQL hosting for high performance and scalability.

## Installation

### Clone the repository:
```sh
git clone https://github.com/KDF25/nextjs-airbnb.git
```

### Navigate to the project folder:
```sh
cd airbnb
```

### Install dependencies:
```sh
npm install
```

### Set up environment variables:
Create a `.env` file and add the following environment variables:
```sh
DATABASE_URL=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

FACEBOOK_ID=
FACEBOOK_SECRET=

GITHUB_ID=
GITHUB_SECRET=

NEXTAUTH_SECRET=
NEXTAUTH_URL=
NEXT_PUBLIC_API_URL=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_URL=
```

## Running the Project

### Development Mode
```sh
npm run dev
```
The application will be available at: **http://localhost:3000**

### Production Mode

#### Build the project:
```sh
npm run build
```

#### Start the production server:
```sh
npm run start
```

## Project Structure (FSD Architecture)

- `src/entities` 🏗️ - Business logic entities.
- `src/features` ⚡ - Isolated business functionality modules.
- `src/shared` 🛠️ - Common modules used across the app.
- `src/widgets` 💡 - Modular components for building feature-rich UI.

## Scripts

- `npm run dev` 🚀 - Start in development mode.
- `npm run build` 🏗️ - Build the application.
- `npm run start` 🌐 - Start the production server.
- `npm run lint` 🔍 - Code linting.
- `npm run format` 🧹 - Format code with Prettier.
- `npm run prisma:generate` 🔄 - Generate Prisma client.
- `npm run prisma:push` 📥 - Apply changes to the database.
- `npm run prisma:migrate` 📜 - Create migrations.
- `npm run prisma:studio` 🖥️ - Open Prisma Studio UI.
- `npm run prisma:seed` 🌱 - Seed initial database data.

## Dependencies

### Core Technologies
- **Next.js** ⚡ - React framework for SSR and static generation.
- **React** ⚛️ - UI library for building interactive applications.
- **TypeScript** 🛡️ - Type-safe JavaScript.

### Database Management
- **Prisma** 🗂️ - Modern ORM for working with SQL databases.

### UI & Styling
- **Tailwind CSS** 🎨 - Utility-first CSS framework.
- **Framer Motion** 🎬 - Motion animations.
- **React Toastify** 🔔 - Toast notifications.
- **React Select** 🔽 - Select dropdown component.

### Forms & Data Validation
- **React Hook Form** 📋 - Form management.
- **Zod** ✅ - Schema validation.

### State Management
- **Zustand** 🔧 - Lightweight state management.

### API & Integrations
- **Axios** 🌍 - HTTP client.
- **Cloudinary** ☁️ - Image storage and optimization.
- **NextAuth.js** 🔑 - Authentication system.

### Other Utilities
- **Lucide React** 🎨 - Icon library.
- **Clsx** 🔤 - Utility for conditionally joining class names.
- **Sass** 💅 - CSS preprocessor.

## Deployment

You can deploy this project on **Vercel** or any other Next.js-compatible platform:

1. Go to **Vercel** and create a new project.
2. Connect your GitHub repository.
3. Set up environment variables.
4. Click **Deploy**.

---

© 2025 Airbnb. All rights reserved.

