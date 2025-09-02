import Link from 'next/link';
import { ArrowRight, Shirt, Users, TrendingUp, Sparkles } from 'lucide-react';


export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <span className="text-xl font-bold text-neutral-900">FitSphere</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/auth/login"
                className="text-neutral-600 hover:text-primary transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-neutral-50"
              >
                Sign in
              </Link>
              <Link
                href="/auth/register"
                className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            Organize Your
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Wardrobe</span>
            <br />
            Like Never Before
          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            FitSphere helps you manage your clothing collection, discover new styles, and connect with fashion-forward friends. 
            Transform your closet into an organized, inspiring space.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/auth/register"
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-glow transform hover:-translate-y-1 transition-all duration-200 inline-flex items-center justify-center"
            >
              Start Organizing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/auth/login"
              className="border-2 border-neutral-300 text-neutral-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-primary hover:text-primary transition-all duration-200"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-soft border border-neutral-200 text-center hover:shadow-glow transition-all duration-300">
            <div className="h-16 w-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Shirt className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">Smart Organization</h3>
            <p className="text-neutral-600">
              Categorize your clothes by season, occasion, color, and style. Find the perfect outfit in seconds.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-soft border border-neutral-200 text-center hover:shadow-glow transition-all duration-300">
            <div className="h-16 w-16 bg-gradient-to-r from-secondary to-primary rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">Social Wardrobe</h3>
            <p className="text-neutral-600">
              Share your style with friends, get outfit suggestions, and discover new trends together.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-soft border border-neutral-200 text-center hover:shadow-glow transition-all duration-300">
            <div className="h-16 w-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">Style Analytics</h3>
            <p className="text-neutral-600">
              Track your style preferences, see what you wear most, and optimize your wardrobe.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white">
            <Sparkles className="h-12 w-12 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Wardrobe?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of fashion enthusiasts who have already organized their closets with FitSphere
            </p>
            <Link
              href="/auth/register"
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 inline-flex items-center"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="h-8 w-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <span className="text-xl font-bold text-neutral-900">FitSphere</span>
            </div>
            <p className="text-neutral-600 mb-4">
              Organize your wardrobe, discover your style, and connect with fashion friends.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-neutral-500">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
