import { Outlet } from 'react-router';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-gray-900">
      <Navbar />
      <main className="pb-20">
        <Outlet />
      </main>
      <footer className="py-12 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 font-medium">
            © 2026 Minimal Store Practice Project
          </p>
          <div className="flex gap-x-8 text-sm text-gray-500 font-semibold">
            <a href="#" className="hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-600">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
