[Authentication in Next.js 14 is easy...](https://www.youtube.com/watch?v=gPQ9SD_qpuk&t=2s)

[GitHub](https://github.com/ski043/next-auth-nextjs-14)


### Prisma settings

[Prisma integration](https://supabase.com/partners/integrations/prisma)

in `schema.prisma` add:

```prisma
datasource db {
   provider  = "postgresql"
   url       = env("DATABASE_URL")
   directUrl = env("DIRECT_URL")
}
```

in `.env` add `?pgbouncer=true&connection_limit=1` and change to port `5432`:
```dotenv
DATABASE_URL="postgres://[user].emtqqsbeqwhbhvhxosrz:[password]@aws-0-eu-central-1.pooler.supabase.com:5432/[db-name]?pgbouncer=true&connection_limit=1"
DIRECT_URL="postgres://[user].emtqqsbeqwhbhvhxosrz:[password]@aws-0-eu-central-1.pooler.supabase.com:5432/[db-name]?pgbouncer=true&connection_limit=1"
```
Run in terminal:

```
npx prisma migrate dev --name init
```
