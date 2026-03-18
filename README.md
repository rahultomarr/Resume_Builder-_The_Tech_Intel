# ✨ TechIntel Resume Builder

_An AI-guided, ATS-optimized, professional resume builder built for modern job seekers and academic institutions._

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748)](https://www.prisma.io/)
[![Turborepo](https://img.shields.io/badge/Turborepo-Monorepo-EF4444)](https://turbo.build/)

## 🚀 Overview

TechIntel Resume Builder is a complete, full-stack B2B/B2C SaaS platform. It aims to solve the problem of students being rejected by ATS (Applicant Tracking Systems) formatting rules by providing clean, professional templates and guiding users through an AI-powered conversational builder.

## 🏗️ Architecture Stack

This project is built using a modern, scalable **Turborepo** monorepo structure:
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS (Light Mode configured)
- **State Management:** React & Server Actions
- **Database:** PostgreSQL (managed locally via Docker)
- **ORM:** Prisma
- **Auth:** NextAuth.js (v5)
- **Containerization:** Docker Compose

### 📂 Structure
- `apps/web`: The core Next.js application (Marketing, Dashboard, Editor).
- `packages/resume-renderer`: Shared UI components for generating exact A4 PDF renders.
- `packages/ats-scorer`: Shared logic for scanning resumes against industry ATS rules.
- `packages/email-templates`: React email templates.

---

## 💻 Running the Project Locally

### 1. Prerequisites
- [Node.js](https://nodejs.org/en/) & [pnpm](https://pnpm.io/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (for local database services)

### 2. Setup

First, clone the project and install all monorepo dependencies:
```bash
git clone https://github.com/rahultomarr/Resume_Builder-_The_Tech_Intel.git
cd Resume_Builder-_The_Tech_Intel
pnpm install
```

Start the local background services (PostgreSQL & Redis):
```bash
docker compose up -d
```

### 3. Database Initialization
Copy the environment variables and run migrations to create tables:
```bash
cd apps/web
cp .env.example .env.local
npx prisma migrate dev --name init
```

Seed the database with sample templates and the default dev user:
```bash
node create-user.mjs
# Next, run the Prisma generation
npx prisma db seed
```

### 4. Start Development Server
Return to the root directory and start Turborepo:
```bash
cd ../..
pnpm dev
```
Navigate to `http://localhost:3000` to view the app!

---

## 🔒 Testing Authentication
For local development, you have a seeded test user that bypasses strict password verification.
Go to `http://localhost:3000/login` and use:
- **Email:** `dev@techintel.ai`
- **Password:** `<any-8-character-string>`

You'll be dropped into the user dashboard!

---

## 📝 License
This project is licensed under the MIT License.
