import React from "react";
import { useMediaQuery } from "react-responsive";

interface IntroductionProps {
  paragraph: string;
}

const Introduction: React.FC<IntroductionProps> = ({ paragraph }) => {
  const isDesktop = useMediaQuery({ minWidth: 750 });
  return isDesktop ? (
    <div id={"introduction"} className="bg-white flex flex-row w-full">
      <div className="bg-[#FAFAFA] flex flex-col justify-center py-8 px-12 w-1/3">
        <div className="flex flex-col gap-4 w-full pl-4">
          <h2 className="text-xl font-bold text-[20px] text-black w-full">
            Engineering solutions <br />
            for the digital frontier.
          </h2>
          <p className="text-[15px] text-black w-full">{paragraph}</p>
        </div>
      </div>
      <div className="bg-[#FAFAFA] flex flex-row gap-4 w-2/3 justify-end items-center px-8 py-8">
        <div>
          <img src="/conquering-sample-card.png" alt="Resource Icon" />
        </div>
        <div>
          <img src="/conquering-sample-card.png" alt="Resource Icon" />
        </div>
        <div>
          <img src="/conquering-sample-card.png" alt="Resource Icon" />
        </div>
      </div>
    </div>
  ) : (
    <div id={"introduction"} className="bg-white">
      <div className="bg-[#FAFAFA] flex flex-col items-center pt-1 pb-1 gap-4">
        <h2 className="text-xl font-bold text-[20px] text-black w-[248px]">
          Engineering solutions <br />
          for the digital frontier.
        </h2>
        <p className="text-[15px] text-black w-[248px]">{paragraph}</p>
      </div>
      <div className="bg-[#FAFAFA] flex justify-center pt-4 pb-4">
        <div>
          <img src="/conquering-sample-card.png" alt="Resource Icon" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
