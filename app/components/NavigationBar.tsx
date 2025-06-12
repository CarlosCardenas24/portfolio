import React from "react";
import { useMediaQuery } from "react-responsive";

const NavigationBar: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 750 });

  // Only render the navigation bar for mobile views
  if (!isMobile) return null;

  return (
    <nav className="py-4 mb-8">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="flex space-x-6">
          <a
            href="#projects"
            className="text-gray-300 hover:text-[#6D14FF] transition-colors roboto-mono"
          >
            Projects
          </a>
          <a
            href="https://www.linkedin.com/in/carlos-cardenas-developer/"
            target="_blank"
            className="text-gray-300 hover:text-[#6D14FF] transition-colors roboto-mono"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="text-gray-300 hover:text-[#6D14FF] transition-colors roboto-mono"
          >
            Resume
          </a>
          <a
            href="https://github.com/CarlosCardenas24"
            target="_blank"
            className="text-gray-300 hover:text-[#6D14FF] transition-colors roboto-mono"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
