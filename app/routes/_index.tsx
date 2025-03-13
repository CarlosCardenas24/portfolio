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
    <div>
      <div id={'hero'} className="flex flex-col items-center gap-4">
        <div className="flex justify-center">
          {resources.map((resource : Resource)=> resource.icon)}
        </div>
        <div className="bg-white w-[248px] h-[60px] flex justify-center">
            <h1 className="text-black p-1">A Software Craftsman, at <br/>your service</h1>
        </div>
        <div className="bg-gradient-to-b from-black to-[#FAFAFA]">
          <img src="/anime-coder-girl.png" alt="Resource Icon"/>
        </div>
      </div>
      <div id={'introduction'} className="bg-white">
        <div className="bg-[#FAFAFA] flex flex-col items-center pt-1 pb-1 gap-4">
          <h2 className="text-xl font-bold text-[20px] w-[248px]">
            Engineering solutions <br/>for the digital frontier.
          </h2>
          <p className="text-[15px] w-[248px]">{paragraph}</p>
        </div>
            <div className="bg-[#FAFAFA] flex justify-center">
        <div>
          <img src="/conquering-sample-card.png" alt="Resource Icon"/>
        </div>
      </div>
      </div>
      <div id={'projects'} className="bg-[#6D14FF] flex flex-col items-center gap-2">
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
          <div className="bg-[url('/leopard-bg.png')] bg-cover bg-center text-white flex flex-col items-center gap-2 p-3">
            <h3 className="text-[55px]">Projects</h3>
            <div>
              <a href="#" className="text-[20px] hover:underline p-[20px] inline-block">Shopify Theme App Extension</a>
            </div>
            <div>
              <a href="#" className="text-[20px] hover:underline p-[20px] inline-block">Landing Page</a>
            </div>
            <div>
              <a href="#" className="text-[20px] hover:underline p-[20px] inline-block">AI Image Diffusion / Story Board</a>
            </div>
            <div>
              <a href="#" className="text-[20px] hover:underline p-[20px] inline-block">Shopping Cart</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id={'contact'} className="py-8 flex justify-center bg-gradient-to-b from-[#6D14FF] to-black">
            <div className="border border-white w-[300px] flex flex-col items-center gap-4 p-6">
            <h3 className="text-xl font-bold text-white">Contact Me</h3>
            <form className="w-full flex flex-col items-center gap-4">
              <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              className="w-full p-3 border border-gray-300 rounded"
              required
              />
              <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              className="w-full p-3 border border-gray-300 rounded"
              required
              />
              <textarea 
              name="message" 
              placeholder="Your Message" 
              rows={4}
              className="w-full p-3 border border-gray-300 rounded"
              required
              ></textarea>
              <button 
              type="submit" 
              className="bg-[#6D14FF] text-white py-3 px-6 rounded hover:bg-purple-700 transition"
              >
              Send Message
              </button>
            </form>
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
