import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className=' p-24'>
      <Link href={'/sign-up'}>
        <Button>Singup</Button>
      </Link>
      <Link href={'/sign-in'}>
        <Button>Login</Button>
      </Link>
    </main>
  );
}
