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
              <div className="flex flex-col justify-center gap-1">
                {/* <span className="text-white">Carlos Cardenas</span>
            <span className="text-white">Software Developer</span> */}
              </div>
            </div>
            <div className="max-w-md">
              <p className="text-[18px] text-white max-w-md">
                {recommendation}
              </p>
            </div>
          </div>

          <div className="w-full mt-16 pb-16 px-8 relative">
            <div className="w-[80%] h-[450px] mx-auto my-20 relative overflow-hidden flex items-center justify-center">
              <div className="w-[100%] h-[100%] mx-auto my-20 relative overflow-hidden flex items-center justify-center">
                <img
                  src="/leopard-bg.png"
                  alt="Leopard Background"
                  className="absolute w-full h-full object-cover transform rotate-90"
                />
              </div>
              {/* <div
            className="absolute inset-0 bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/leopard-bg.png')",
              backgroundSize: "100% 100%",
              width: "100%",
              height: "100%",
              transform: "rotate(90deg)",
            }}
          ></div> */}

              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-[55px] text-white z-10">Projects</h3>
              </div>
            </div>
            {/* <div className="bg-[url('/leopard-bg.png')] bg-center bg-no-repeat flex items-center justify-center w-[80%] h-[450px] mx-auto my-20">
          <h3 className="text-[55px]">Projects</h3>
        </div> */}

            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[400px] text-center">
              <a
                href="#"
                className="text-[25px] hover:underline whitespace-nowrap p-[20px] block"
              >
                Shopify Theme App Extension
              </a>
            </div>

            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[80px] h-[300px]">
              <a
                href="#"
                className="text-[25px] hover:underline p-[20px] block"
              >
                Landing Page
              </a>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[400px] text-center">
              <a
                href="#"
                className="text-[25px] hover:underline p-[20px] whitespace-nowrap block"
              >
                AI Image Diffusion / Story Board
              </a>
            </div>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-[80px] h-[300px]">
              <a
                href="#"
                className="text-[25px] hover:underline p-[20px] block"
              >
                Shopping Cart
              </a>
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
        <div className="bg-[url('/leopard-bg.png')] bg-contain bg-center bg-no-repeat flex flec-column items-center justify-center w-[80%] h-[450px] mx-auto my-20">
          <h3 className="text-[55px]">Projects</h3>
          <div>
            <a
              href="#"
              className="text-[20px] hover:underline p-[20px] inline-block"
            >
              Shopify Theme App Extension
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-[20px] hover:underline p-[20px] inline-block"
            >
              Landing Page
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-[20px] hover:underline p-[20px] inline-block"
            >
              AI Image Diffusion / Story Board
            </a>
          </div>
          <div>
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
  );
};

export default Projects;
