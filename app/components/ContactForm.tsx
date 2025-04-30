import React from "react";
import { useMediaQuery } from "react-responsive";

const ContactForm: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: 750 });

  return isDesktop ? (
    <div
      id={"contact"}
      className="py-12 flex justify-center bg-gradient-to-b from-[#6D14FF] to-black"
    >
      <div className="container max-w-7xl mx-auto flex flex-row items-center pl-[5.5rem]">
        <div className="w-1/2 pr-8">
          <div className="border border-white max-w-xl p-10">
            <h3 className="text-3xl font-bold text-white mb-8">Contact Me</h3>
            <form className="w-full flex flex-col gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-4 border border-gray-300 rounded"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                className="w-full p-4 border border-gray-300 rounded"
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
        <div className="w-1/2 h-full flex items-center justify-center">
          <img
            src="/pretty-anime-girl-saying-goodbye.png"
            alt="Anime Girl Waving Goodbye"
            className="h-full object-contain"
          />
        </div>
      </div>
    </div>
  ) : (
    <div
      id={"contact"}
      className="py-8 flex justify-center bg-gradient-to-b from-[#6D14FF] to-black"
    >
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
  );
};

export default ContactForm;
