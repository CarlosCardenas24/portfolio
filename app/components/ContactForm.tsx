import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const ContactForm: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: 1350 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a9961675-7df4-44f1-bd4e-d8e9f2ec46f6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return isDesktop ? (
    <div
      id={"contact"}
      className=" flex justify-center bg-gradient-to-b from-[#6D14FF] to-black pl-[80px] relative"
    >
      <div className="py-12 container max-w-7xl mx-auto flex flex-row items-center justify-center">
        <div className="w-1/2 pr-8">
          <div className="border border-white max-w-xl p-10">
            <h3 className="text-3xl font-bold text-white mb-8">Contact Me</h3>

            <form onSubmit={onSubmit} className="w-full flex flex-col gap-6">
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
                className="bg-[#6D14FF] text-white py-3 px-6 rounded hover:bg-purple-700 transition motion-safe:animate-pulse"
              >
                Send Message
              </button>
            </form>
            <div className="text-[15px] mt-4 roboto-mono">{result}</div>
          </div>
        </div>
      </div>

      <div
        className={`max-w-[500px] max-h-[600px] absolute right-0 bottom-0
        transition-all duration-1000 ease-in-out ${
          imageLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <img
          src="/pretty-anime-girl-saying-goodbye.png"
          alt="Anime Girl Waving Goodbye"
          className="h-full object-cover"
        />
      </div>
    </div>
  ) : (
    <div
      id={"contact"}
      className="py-8 flex justify-center bg-gradient-to-b from-[#6D14FF] to-black"
    >
      <div className="border border-white w-[300px] flex flex-col items-center gap-4 p-6">
        <h3 className="text-xl font-bold text-white">Contact Me</h3>
        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col items-center gap-4"
        >
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
        <div className="text-[15px] mt-4 roboto-mono">{result}</div>
      </div>
    </div>
  );
};

export default ContactForm;
