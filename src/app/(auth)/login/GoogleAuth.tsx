import Button from '@/components/ui/Button';
import { googleSignin } from '@/lib/api/auth';
import { FcGoogle } from 'react-icons/fc';

export default function GoogleAuth() {
  const handleGoogleLogin = async () => {
    try {
      const url = await googleSignin();
      const newWindow = url.data.url;

      if (typeof newWindow === 'string') {
        window.location.href = newWindow;
      } else {
        console.error('googleSignin did not return a URL string', url);
      }
    } catch (err) {
      console.error('Google sign-in failed', err);
    }
  };

  return (
    <Button type="button" onClick={handleGoogleLogin} className="flex justify-center items-center">
      <FcGoogle className="mr-2.5 h-5 w-5" />
      Sign in with Google
    </Button>
  );
}
