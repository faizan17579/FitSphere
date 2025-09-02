import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authentication - FitSphere',
  description: 'Sign in or create your account to manage your wardrobe',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {children}
    </div>
  );
}
