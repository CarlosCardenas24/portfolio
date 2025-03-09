import type { MetaFunction } from "@remix-run/node";
/* Mobile is default styles */

type Resource = {
  href: string;
  text: string;
  icon: JSX.Element;
};

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const recommendation = "\"I highly recommend Carlos Cardenas for any software development project. He is a true professional and a pleasure to work with.\"";
  
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div id={'hero'} className="bg-black h-max flex flex-col align-center gap-10">
        <div className="flex justify-center">
          {resources.map((resource : Resource)=> resource.icon)}
        </div>
        <div className="flex justify-center">
            <h1 className="bg-white p-2 text-[14px] w-1/2">A Software Craftsman, at your service</h1>
        </div>
        <div>
          <img src="/anime-coder-girl.png" alt="Resource Icon" className="w-max h-max"/>
        </div>
      </div>
      <div id={'introduction'} className="bg-[#FAFAFA] h-screen w-screen flex flex-col align-center justify-between pt-10">
        <div className="flex justify-center">
          <h2 className="p-2 text-[14px] w-1/2 text-black">
            Engineering solutions for the digital frontier.
          </h2>
        </div>
        <div className="flex justify-center">
          <p className="p-2 text-[12px] w-1/2">{paragraph}</p>
        </div>
        <div className="flex justify-center">
          <div className="p-2 text-[14px] w-1/2">
          {/*Card carousel component goes here*/}
          </div>
        </div>
      </div>
      <div id={'projects'} className="bg-[#6D14FF] flex flex-col align-center justify-between pt-10 text-white">
        <div className="flex justify-center flex-col items-center">
          <img src="/carlos-cardenas-picture.jpeg" alt="Project Image" className="w-[89px] h-[90px] rounded-full"/>
          <div className="pt-10 flex flex-col items-center">
            <span className="text-[14px] text-left w-full">Carlos Cardenas</span>
            <span className="text-[14px] text-left w-full">Software Developer</span>
          </div>
        </div>
        <div className="pt-10 flex justify-center">
          <p className="p-2 text-[12px] w-1/2 text-left">{recommendation}</p>
        </div>
        <div className="p-12 flex flex-col justify-between text-center">
            <div className="bg-[url('/leopard-bg.png')] bg-cover bg-center flex flex-col items-center justify-evenly">
            <h3 className="p-2 text-[20px]">Projects</h3>
            <p className="p-2 text-[12px]">Shopify Theme App Extension</p>
            <p className="p-2 text-[12px]">Landing Page</p>
            <p className="p-2 text-[12px]">AI Image Diffusion / Story Board</p>
            <p className="p-2 text-[12px]">Shopping Cart</p>
            </div>
        </div>
      </div>
    </div>
  );
}

const resources = [
  {
    href: "",
    text: "This is the software developers brand logo",
    icon: (
      <img src="/logo-carlos.png" alt="Resource Icon" className="w-[163px] h-[153px]"/>
    ),
  }
];
