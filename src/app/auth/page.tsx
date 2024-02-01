import { getServerSession } from 'next-auth';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import LoginForm from '@/components/LoginForm';
import GithubButton from '@/components/GithubButton';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect('/');
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      {' '}
      <Card>
        <CardHeader>
          <CardTitle>Please sign in </CardTitle>
          <CardDescription>
            To access the private page you have to be authenticated
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col'>
            <LoginForm />
            <GithubButton />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
