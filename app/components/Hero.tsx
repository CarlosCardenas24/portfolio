import React from "react";
import { useMediaQuery } from "react-responsive";

interface Resource {
  icon: React.ReactNode;
}

interface HeroProps {
  resources: Resource[];
}

const Hero: React.FC<HeroProps> = ({ resources }) => {
  const isDesktop = useMediaQuery({ minWidth: 750 });

  return isDesktop ? (
    <div
      id={"hero"}
      className="flex flex-row items-start justify-between gap-4 border-l-2 border-white pl-5 ml-20 relative"
    >
      <div className="flex flex-col items-start justify-between gap-7">
        <div>
          <h1 className="text-white text-xl font-bold mt-8">
            Carlos <br /> Cardenas
          </h1>
        </div>
        <div className="bg-white w-[248px] h-[60px] flex justify-center">
          <h1 className="text-black p-1">
            A Software Craftsman, at <br />
            your service
          </h1>
        </div>
        <div className="flex flex-col space-y-8">
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#6D14FF] transition-colors text-xl"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="text-gray-300 hover:text-[#6D14FF] transition-colors text-xl"
          >
            Resume
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#6D14FF] transition-colors text-xl"
          >
            GitHub
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-[#6D14FF] transition-colors text-xl"
          >
            Projects
          </a>
        </div>
      </div>
      <div className="flex justify-center absolute left-1/2 top-1/4 transform -translate-x-1/2 ">
        {resources.map((resource: Resource, index: number) => (
          <React.Fragment key={index}>{resource.icon}</React.Fragment>
        ))}
      </div>
      <div className="bg-black max-w-[500px]">
        <img src="/anime-coder-girl.png" alt="Resource Icon" />
      </div>
    </div>
  ) : (
    <div
      id={"hero"}
      className="flex flex-col items-center justify-between gap-4"
    >
      <div className="flex justify-center">
        {resources.map((resource: Resource, index: number) => (
          <React.Fragment key={index}>{resource.icon}</React.Fragment>
        ))}
      </div>
      <div className="bg-white w-[248px] h-[60px] flex justify-center">
        <h1 className="text-black p-1">
          A Software Craftsman, at <br />
          your service
        </h1>
      </div>
      <div className="bg-black">
        <img src="/anime-coder-girl.png" alt="Resource Icon" />
      </div>
    </div>
  );
};

export default Hero;
