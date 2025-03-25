import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-black">
        <nav className="py-4 mb-8">
          <div className="container mx-auto px-4 flex justify-center">
            <div className="flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Projects</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="py-6 mt-12 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div>
              <h3 className="text-xl font-bold text-white">Connect:</h3>
                <div className="flex flex-col space-y-4 mt-3 mb-6">
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Resume
                </a>
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Projects</h3>
                <div className="flex flex-col space-y-4 mt-3 mb-6">
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Shoppify Theme App Extension
                </a>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Landing Page
                </a>
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  AI Image Diffusion / Story Board
                </a>
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                Shopping Cart
                </a>
              </div>
            </div>
            <div>
              <div className="flex justify-center mt-8 mb-4">
                <img 
                  src="/logo-carlos.png" 
                  alt="Logo" 
                  className="h-16 w-auto" 
                />
              </div>
            </div>
            <p className="text-gray-400 text-center">© {new Date().getFullYear()} All rights reserved</p>
          </div>
        </footer>
        <div className="flex justify-center mt-4">
          <img 
            src="/pretty-anime-girl-saying-goodbye.png" 
            alt="Anime coder girl" 
          />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
export default function App() {
  return <Outlet />;
}
