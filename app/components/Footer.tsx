import React from "react";
import { useMediaQuery } from "react-responsive";

export default function Footer() {
  const isDesktop = useMediaQuery({ minWidth: 1350 });
  return isDesktop ? (
    <footer className="py-10 border-t border-gray-800">
      <div className="container mx-auto pl-[5.5rem] pr-[5.5rem] max-w-7xl">
        <div className="flex flex-row justify-between">
          <div className="w-1/2 flex flex-row">
            <div className="w-1/3 pr-8">
              <h3 className="text-xl font-bold text-white roboto-mono">
                Connect:
              </h3>
            </div>
            <div className="w-1/3">
              <h3 className="text-xl font-bold text-white roboto-mono">
                Projects:
              </h3>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
        <div className="w-full h-[2px] bg-white mt-2 mb-6"></div>

        <div className="flex flex-row justify-between">
          <div className="w-1/2 flex flex-row">
            <div className="w-1/3 pr-8">
              <div className="flex flex-col space-y-4 mt-3 mb-6">
                <a
                  href="https://www.linkedin.com/in/carlos-cardenas-developer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors roboto-mono"
                >
                  LinkedIn
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="text-gray-300 hover:text-white transition-colors roboto-mono"
                >
                  Resume
                </a>
                <a
                  href="https://github.com/CarlosCardenas24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors roboto-mono"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex flex-col space-y-4 mt-3 mb-6">
                <a
                  href="https://apps.shopify.com/wishify"
                  target="_blank"
                  className="text-gray-300 hover:text-white transition-colors roboto-mono"
                >
                  Shopify Theme App Extension
                </a>
                <a
                  href="https://ccwebarch.com/"
                  target="_blank"
                  className="text-gray-300 hover:text-white transition-colors roboto-mono"
                >
                  Landing Page
                </a>
                <a
                  href="https://shopping-cart-poc-app.netlify.app/"
                  target="_blank"
                  className="text-gray-300 hover:text-white transition-colors roboto-mono"
                >
                  Shopping Cart
                </a>
                {/* <a
                  href="#"
                  target="_blank"
                  className="text-gray-300 hover:text-white transition-colors roboto-mono"
                >
                  AI Image Diffusion / Story Board
                </a> */}
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-end">
            <div className="w-[200px] flex flex-col items-center">
              <div className="mb-4">
                <img
                  src="/logo-carlos.png"
                  alt="Logo"
                  className="h-24 w-auto"
                />
              </div>
              <p className="text-gray-400 text-center roboto-mono">
                © {new Date().getFullYear()} All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  ) : (
    <footer className="py-6 mt-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-xl font-bold text-white roboto-mono">Connect:</h3>
          <div className="flex flex-col space-y-4 mt-3 mb-6">
            <a
              href="https://www.linkedin.com/in/carlos-cardenas-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors roboto-mono"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="text-gray-300 hover:text-white transition-colors roboto-mono"
            >
              Resume
            </a>
            <a
              href="https://github.com/CarlosCardenas24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors roboto-mono"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-white roboto-mono">Projects</h3>
          <div className="flex flex-col space-y-4 mt-3 mb-6">
            <a
              href="https://apps.shopify.com/wishify"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors roboto-mono"
            >
              Shoppify Theme App Extension
            </a>
            <a
              href="https://ccwebarch.com/"
              target="_blank"
              className="text-gray-300 hover:text-white transition-colors roboto-mono"
            >
              Landing Page
            </a>
            <a
              href="https://shopping-cart-poc-app.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors roboto-mono"
            >
              Shopping Cart
            </a>
            {/* <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors roboto-mono"
            >
              AI Image Diffusion / Story Board
            </a> */}
          </div>
        </div>
        <div>
          <div className="flex justify-center mt-8 mb-4">
            <img src="/logo-carlos.png" alt="Logo" className="h-16 w-auto" />
          </div>
        </div>
        <p className="text-gray-400 text-center roboto-mono">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}
