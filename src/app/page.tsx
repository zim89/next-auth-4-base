import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import LogoutButton from '@/components/LogoutButton';
import { authOptions } from '@/lib/auth';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <section className='section'>
      <div className='container'>
        <h1>Hello from the index page, this is a public route</h1>
        {session ? (
          <div>
            <h2>you are logged in </h2>
            <LogoutButton />
          </div>
        ) : (
          <div>
            <h2>Please log in to see something special</h2>
            <Button asChild>
              <Link href='/auth'>Login</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
