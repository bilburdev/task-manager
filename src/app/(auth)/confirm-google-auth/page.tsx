'use client';
import { useGoogleAuth } from '@/lib/hooks/useGoogleAuth';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function ConfirmGoogleAuth() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const { mutate } = useGoogleAuth();

  useEffect(() => {
    if (!code) return;
    mutate(code, {
      onSuccess: () => {
        router.replace('/dashboard');
      },
      onError: () => {
        router.replace('/login');
      },
    });
  }, [code, router, mutate]);

  return <div>Google Authorization</div>;
}
