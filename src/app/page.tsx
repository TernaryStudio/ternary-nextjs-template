import { MadeWithTernary } from "@/components/made-with-ternary";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Main Heading */}
          <div className="space-y-6 text-center py-[147px]">
            <h1 className="text-5xl sm:text-7xl font-bold text-gray-800 dark:text-gray-200 tracking-tight font-mono">
              Your Journey
              <span className="block text-gray-600 dark:text-gray-400">
                Begins Here
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-mono font-bold">
              Craft, Create, Inspire
            </p>
          </div>

          {/* Neumorphic Content Card */}

          {/* Neumorphic Decorative Elements */}
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <MadeWithTernary />
      </footer>
    </div>
  );
}
