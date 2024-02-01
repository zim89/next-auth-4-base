'use client';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { signIn } from 'next-auth/react';

export default function GithubButton() {
  return (
    <Button
      onClick={() =>
        signIn('github', {
          callbackUrl: `${window.location.origin}`,
        })
      }
      className='mt-6'
      variant='secondary'>
      Login with Github <Github className='ml-4 h-4 w-4' />
    </Button>
  );
}
