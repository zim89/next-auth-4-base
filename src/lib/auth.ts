import { PrismaAdapter } from '@auth/prisma-adapter';
import GitHubProvider from 'next-auth/providers/github';
import EmailProvider from 'next-auth/providers/email';
import type { NextAuthOptions } from 'next-auth';
import type { Adapter } from 'next-auth/adapters';
import prisma from './db';

export const authOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_RESEND_HOST,
        port: process.env.EMAIL_RESEND_PORT,
        auth: {
          user: process.env.EMAIL_RESEND_USER,
          pass: process.env.EMAIL_RESEND_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
} satisfies NextAuthOptions;
