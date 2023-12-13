// pages/login.js
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const handleSignInWithGoogle = async () => {
    await signIn('google', { redirect: false });
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <button onClick={handleSignInWithGoogle}>Iniciar Sesión con Google</button>
    </div>
  );
}
