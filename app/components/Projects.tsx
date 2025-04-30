import React from "react";
import { useMediaQuery } from "react-responsive";

interface ProjectsProps {
  recommendation: string;
}

const Projects: React.FC<ProjectsProps> = ({ recommendation }) => {
  const isDesktop = useMediaQuery({ minWidth: 750 });

  return isDesktop ? (
    <div
      id={"projects"}
      className="bg-[#6D14FF] flex flex-col relative pl-[5.5rem]"
    >
      <div className="w-full flex justify-center">
        <div className="max-w-7xl w-full">
          <div className="flex flex-row items-start gap-8 mt-1 ml-12 px-12">
            <div className="flex flex-row items-center">
              <div className="mr-4">
                <img
                  src="/carlos-cardenas-picture.jpeg"
                  alt="Profile Image"
                  className="rounded-full w-[90px] h-[90px] object-cover border-2 border-white"
                />
              </div>
              <div className="flex flex-col justify-center gap-1"></div>
            </div>
            <div className="max-w-md">
              <p className="text-[18px] text-white max-w-md">
                {recommendation}
              </p>
            </div>
          </div>

          <div className="w-full mt-16 pb-16 px-8">
            <div className="grid grid-cols-10 grid-rows-5 w-[80%] h-[450px] mx-auto relative">
              <div className="col-start-5 col-span-2 row-start-1 flex justify-center items-center">
                <a
                  href="#"
                  className="text-[20px] hover:underline whitespace-nowrap p-[20px] block font-light"
                >
                  Shopify Theme App Extension
                </a>
              </div>
              <div className="col-start-1 row-start-3 flex items-center justify-center -rotate-90">
                <a
                  href="#"
                  className="text-[20px] hover:underline p-[20px] whitespace-nowrap block font-light"
                >
                  Landing Page
                </a>
              </div>

              <div className="col-start-2 col-span-8 row-start-2 row-span-3 relative overflow-hidden w-full">
                <img
                  src="/leopard-bg-rotated.png"
                  alt="Leopard Background"
                  className="absolute insert-0 w-full h-full max-w-270 max-h-778 object-fill"
                />
              </div>

              <div className="col-start-5 col-span-2 row-start-2 row-span-3 absolute inset-0 flex items-center justify-center">
                <h3 className="text-[100px] text-white z-10">Projects</h3>
              </div>
              <div className="col-start-10 row-start-3 flex items-center justify-center rotate-90">
                <a
                  href="#"
                  className="text-[20px] hover:underline p-[20px] whitespace-nowrap block font-light"
                >
                  Shopping Cart
                </a>
              </div>
              <div className="col-start-5 col-span-2 row-start-5 flex justify-center items-center">
                <a
                  href="#"
                  className="text-[20px] hover:underline p-[20px] whitespace-nowrap block font-light"
                >
                  AI Image Diffusion / Story Board
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      id={"projects"}
      className="bg-[#6D14FF] flex flex-col items-center gap-2"
    >
      <div className="pt-2 flex justify-center">
        <div className="p-2">
          <img
            src="/carlos-cardenas-picture.jpeg"
            alt="Profile Image"
            className="rounded-full w-[90px] h-[90px] object-cover border-2 border-white"
          />
        </div>
        <div className="flex flex-col justify-center gap-1">
          <span className="text-white">Carlos Cardenas</span>
          <span className="text-white">Software Developer</span>
        </div>
      </div>
      <div className="pb-2">
        <p className="text-[18px] text-white w-[248px]">{recommendation}</p>
      </div>
      <div className="pb-2">
        <div
          className="bg-[url('/leopard-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center w-[80%] h-[650px] mx-auto my-20
        "
        >
          <h3 className="text-[55px]">Projects</h3>
          <div className="flex flex-col justify-between h-[80%] w-full">
            <div className="text-center">
              <a
                href="#"
                className="text-[20px] hover:underline p-[20px] inline-block"
              >
                Shopify Theme App Extension
              </a>
            </div>
            <div className="text-center">
              <a
                href="#"
                className="text-[20px] hover:underline p-[20px] inline-block"
              >
                Landing Page
              </a>
            </div>
            <div className="text-center">
              <a
                href="#"
                className="text-[20px] hover:underline p-[20px] inline-block"
              >
                AI Image Diffusion / Story Board
              </a>
            </div>
            <div className="text-center">
              <a
                href="#"
                className="text-[20px] hover:underline p-[20px] inline-block"
              >
                Shopping Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
