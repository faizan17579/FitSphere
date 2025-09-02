import Navigation from '@/components/Navigation';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Welcome to FitSphere
          </h1>
          <p className="text-xl text-neutral-600 mb-8">
            Your personal wardrobe management dashboard
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-soft border border-neutral-200 hover:shadow-glow transition-all duration-300">
              <div className="h-12 w-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Manage Wardrobe</h3>
              <p className="text-neutral-600">Add, organize, and track your clothing items</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-soft border border-neutral-200 hover:shadow-glow transition-all duration-300">
              <div className="h-12 w-12 bg-gradient-to-r from-secondary to-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Connect Friends</h3>
              <p className="text-neutral-600">Share wardrobes and get style inspiration</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-soft border border-neutral-200 hover:shadow-glow transition-all duration-300">
              <div className="h-12 w-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Track Analytics</h3>
              <p className="text-neutral-600">Monitor your style preferences and usage</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
