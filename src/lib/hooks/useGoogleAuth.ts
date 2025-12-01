import { confirmGoogleAuth } from '@/lib/api/auth';
import { useMutation } from '@tanstack/react-query';

export function useGoogleAuth() {
  return useMutation({
    mutationFn: (code: string) => confirmGoogleAuth(code),
    onSuccess: () => {
      console.log('Google Authentication successful');
    },
    onError: (error) => {
      console.error('Google Authentication failed:', error);
    },
  });
}
