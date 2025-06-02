import React from "react";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface IntroductionProps {
  paragraph: string;
}

const Introduction: React.FC<IntroductionProps> = ({ paragraph }) => {
  const isDesktop = useMediaQuery({ minWidth: 1350 });
  return isDesktop ? (
    <div id={"introduction"} className="bg-[#FAFAFA] flex flex-col w-full">
      <div className="w-full flex justify-center">
        <div className="max-w-7xl w-full">
          <div className="flex flex-row w-full pl-[5.5rem] ">
            <div className="bg-[#FAFAFA] flex flex-col justify-center h-full py-8 px-12 w-3/5">
              <div className="flex flex-col gap-4 w-full">
                <h2 className="text-xl font-bold text-[20px] text-black w-full roboto-mono">
                  Engineering solutions <br />
                  for the digital frontier.
                </h2>
                <p className="text-[15px] text-black w-full roboto-mono">
                  {paragraph}
                </p>
              </div>
            </div>
            <div className="bg-[#FAFAFA] flex flex-row gap-4 w-2/3 justify-end items-center px-8 py-8">
              <div>
                <img
                  src="/conquering-sample-card.png"
                  alt="Resource Conquiring"
                />
              </div>
              <div>
                <img src="/patience-sample-card.png" alt="Resource patience" />
              </div>
              <div>
                <img
                  src="/adaptable-sample-card.png"
                  alt="Resource adaptable"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-32 relative overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#6D14FF"
            d="M0,100 L325,00 L750,100 L1200,90 L1200,120 L0,120 Z"
          ></path>
        </svg>
      </div>
    </div>
  ) : (
    <div id={"introduction"} className="bg-white">
      <div className="bg-[#FAFAFA] flex flex-col items-center pt-1 pb-1 gap-4">
        <h2 className="text-xl font-bold text-[20px] text-black w-[248px] roboto-mono">
          Engineering solutions <br />
          for the digital frontier.
        </h2>
        <p className="text-[15px] text-black w-[248px] roboto-mono">
          {paragraph}
        </p>
      </div>
      <div className="bg-[#FAFAFA] flex flex-col justify-center pt-4 pb-4">
        <Swiper
          spaceBetween={10}
          slidesPerView={1.2}
          centeredSlides={true}
          rewind={true}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active bg-[#6D14FF]",
            el: ".swiper-custom-pagination",
          }}
          modules={[Pagination]}
          className="w-full"
        >
          <SwiperSlide>
            <div className="flex justify-center">
              <img
                src="/conquering-sample-card.png"
                alt="Resource Conquiring"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img src="/patience-sample-card.png" alt="Resource patience" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img src="/adaptable-sample-card.png" alt="Resource adaptable" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-custom-pagination flex justify-center space-x-2 mt-2 "></div>
      </div>
    </div>
  );
};

export default Introduction;
