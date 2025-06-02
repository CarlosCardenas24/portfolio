import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

interface Resource {
  icon: React.ReactNode;
}

interface HeroProps {
  resources: Resource[];
}

const Hero: React.FC<HeroProps> = ({ resources }) => {
  const isDesktop = useMediaQuery({ minWidth: 1350 });
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return isDesktop ? (
    <div className="relative w-full flex justify-center">
      <div className="absolute bottom-0 left-0 right-0 h-[40.5px] bg-[#FAFAFA] z-0"></div>

      <div className="max-w-7xl w-full ml-20">
        <div
          id={"hero"}
          className="flex flex-row items-start justify-between gap-4 pl-5 relative"
        >
          <div className="flex flex-col items-start justify-between gap-7 pl-5">
            <div>
              <h1 className="text-white text-xl font-bold mt-8 roboto-mono">
                Carlos <br /> Cardenas
              </h1>
            </div>
            <div className="bg-white w-[248px] h-[60px] flex justify-center">
              <h1 className="text-black p-1 roboto-mono">
                A Software Craftsman, at <br />
                your service
              </h1>
            </div>
            <div className="flex flex-col space-y-8">
              <a
                href="https://www.linkedin.com/in/carlos-cardenas-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#6D14FF] transition-colors text-xl roboto-mono"
              >
                LinkedIn
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="text-gray-300 hover:text-[#6D14FF] transition-colors text-xl roboto-mono"
              >
                Resume
              </a>
              <a
                href="https://github.com/CarlosCardenas24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#6D14FF] transition-colors text-xl roboto-mono"
              >
                GitHub
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-[#6D14FF] transition-colors text-xl roboto-mono"
              >
                Projects
              </a>
            </div>
          </div>
          <div className="flex justify-center absolute left-[45%] top-[30%] transform -translate-x-1/2 ">
            {resources.map((resource: Resource, index: number) => (
              <React.Fragment key={index}>{resource.icon}</React.Fragment>
            ))}
          </div>
          <div className="bg-black max-w-[500px] opacity-0">
            <img src="/anime-coder-girl.png" alt="Resource Icon" />
          </div>
        </div>

        <div
          className={`max-w-[500px] h-full absolute right-0 top-0 transition-all duration-1000 ease-in-out ${
            imageLoaded
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <img
            src="/anime-coder-girl.png"
            alt="Resource Icon"
            className="h-full object-cover"
          />
        </div>
      </div>
    </div>
  ) : (
    <div
      id={"hero"}
      className="flex flex-col items-center justify-between gap-4 relative"
    >
      <div className="absolute bottom-0 left-0 right-0 h-[35px] bg-[#FAFAFA] z-0"></div>
      <div className="flex justify-center">
        {resources.map((resource: Resource, index: number) => (
          <React.Fragment key={index}>{resource.icon}</React.Fragment>
        ))}
      </div>
      <div className="bg-white w-[248px] h-[60px] flex justify-center">
        <h1 className="text-black p-1 roboto-mono">
          A Software Craftsman, at <br />
          your service
        </h1>
      </div>
      <div className="w-full z-10 flex justify-end">
        <img
          className="max-w-[430px]"
          src="/anime-coder-girl.png"
          alt="Resource Icon"
        />
      </div>
    </div>
  );
};

export default Hero;
