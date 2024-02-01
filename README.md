# Authentication in Next.js 14

## Tech Stack

- Next.js
- NextAuth
- TypeScript
- Prisma
- Supabase


## Features:

- 🔐 NextAuth v4
- 🌐 OAuth Provider (Social login with GitHub)
- ✉️ Email magic link for auth
- 🔘 Login button
- 🚪 Logout button
- 📈 Exploring next-auth session

## Prerequisites

Node version 18.7.x

## Cloning the repository

```shell
git clone https://github.com/zim89/next-auth-4-base.git
```

## Install packages

```shell
npm i
```

## Setup .env file

```dotenv
NEXTAUTH_URL=
NEXTAUTH_SECRET=

GITHUB_ID=
GITHUB_SECRET=

EMAIL_RESEND_HOST=
EMAIL_RESEND_PORT=
EMAIL_RESEND_USER=
EMAIL_RESEND_PASSWORD=
EMAIL_FROM=


DATABASE_URL=
DIRECT_URL=
```

## Setup Prisma

```shell
npx prisma generate
npx prisma db push
```

## Start the app

```shell
npm run dev
```

