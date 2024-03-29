'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';

export default function LoginForm() {
  const [email, setEmail] = useState<null | string>(null);

  async function LoginWithEmail() {
    if (!email) {
      return toast({
        title: 'Validation error...',
        description: 'Please, enter your email',
        variant: 'destructive',
      });
    }

    const loginResult = await signIn('email', {
      email: email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    });

    if (!loginResult?.ok) {
      return toast({
        title: 'Well this did not work...',
        description: 'Something went wrong, please try again',
        variant: 'destructive',
      });
    }

    return toast({
      title: 'Check your email',
      description: 'A magic link has been sent to you',
    });
  }
  return (
    <form action={LoginWithEmail}>
      <div className='flex flex-col gap-y-2'>
        <Label>Email</Label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          name='email'
          type='email'
          placeholder='name@example.com'
        />
      </div>

      <Button type='submit' className='mt-4 w-full'>
        Login with Email
      </Button>
    </form>
  );
}
