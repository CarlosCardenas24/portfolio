import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { AnimatePresence, motion } from "framer-motion";

interface ProjectsProps {
  recommendations: string[];
}

const Projects: React.FC<ProjectsProps> = ({ recommendations }) => {
  const isDesktop = useMediaQuery({ minWidth: 750 });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % recommendations.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [recommendations.length]);

  return isDesktop ? (
    <div
      id={"projects"}
      className="bg-[#6D14FF] flex flex-col relative pl-[80px]"
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
            <div className="max-w-md relative h-[100px] w-[550px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-[18px] text-white max-w-md roboto-mono absolute"
                >
                  {recommendations[currentIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <div className="w-full mt-16 pb-16 px-8">
            <div className="grid grid-cols-10 grid-rows-5 w-[80%] h-[450px] mx-auto relative">
              <div className="col-start-5 col-span-2 row-start-1 flex justify-center items-center">
                <a
                  href="https://apps.shopify.com/wishify"
                  target="_blank"
                  className="text-[20px] text-white hover:underline whitespace-nowrap p-[20px] block font-light roboto-mono"
                >
                  Shopify Theme App Extension
                </a>
              </div>
              <div className="col-start-1 row-start-3 flex items-center justify-center -rotate-90">
                <a
                  href="https://ccwebarch.com/"
                  target="_blank"
                  className="text-[20px] text-white hover:underline p-[20px] whitespace-nowrap block font-light roboto-mono"
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
                <h3
                  className="text-white z-10 rock-3d-regular"
                  style={{ fontSize: "clamp(60px, 10vw, 100px)" }}
                >
                  Projects
                </h3>
              </div>
              <div className="col-start-10 row-start-3 flex items-center justify-center rotate-90">
                <a
                  href="https://shopping-cart-poc-app.netlify.app/"
                  target="_blank"
                  className="text-[20px] text-white hover:underline p-[20px] whitespace-nowrap block font-light roboto-mono"
                >
                  Shopping Cart
                </a>
              </div>
              {/* <div className="col-start-5 col-span-2 row-start-5 flex justify-center items-center">
                <a
                  href="#"
                  className="text-[20px] text-white hover:underline p-[20px] whitespace-nowrap block font-light roboto-mono"
                >
                  AI Image Diffusion / Story Board
                </a>
              </div> */}
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
          <span className="text-white roboto-mono">Carlos Cardenas</span>
          <span className="text-white roboto-mono">Software Developer</span>
        </div>
      </div>
      <div className="pb-2 w-[275px] relative h-[120px]">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-[18px] text-white roboto-mono absolute"
          >
            {recommendations[currentIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
      <div className="pb-2">
        <div
          className="bg-[url('/leopard-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center w-[80%] h-[650px] mx-auto my-20
        "
        >
          <h3 className="text-[55px] text-white rock-3d-regular">Projects</h3>
          <div className="flex flex-col justify-between h-[80%] w-full">
            <div className="text-center">
              <a
                href="https://apps.shopify.com/wishify"
                target="_blank"
                className="text-[20px] text-white hover:underline p-[20px] inline-block roboto-mono"
              >
                Shopify Theme App Extension
              </a>
            </div>
            <div className="text-center">
              <a
                href="https://ccwebarch.com/"
                target="_blank"
                className="text-[20px] text-white hover:underline p-[20px] inline-block roboto-mono"
              >
                Landing Page
              </a>
            </div>
            <div className="text-center">
              <a
                href="https://shopping-cart-poc-app.netlify.app/"
                target="_blank"
                className="text-[20px] text-white hover:underline p-[20px] inline-block roboto-mono"
              >
                Shopping Cart
              </a>
            </div>
            {/* <div className="text-center">
              <a
                href="#"
                className="text-[20px] text-white hover:underline p-[20px] inline-block roboto-mono"
              >
                AI Image Diffusion / Story Board
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
