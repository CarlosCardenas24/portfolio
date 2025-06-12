import type { MetaFunction } from "@remix-run/node";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ContactForm from "~/components/ContactForm";
import Introduction from "../components/Introduction";
import { useMediaQuery } from "react-responsive";

export const meta: MetaFunction = () => {
  return [
    { title: "Carlos's Portfolio" },
    { name: "description", content: "Portfolio of Carlos Cardenas" },
  ];
};

export default function Index() {
  const paragraph =
    "I'm a full-stack developer with a strong focus on JavaScript and React. I enjoy building scalable web applications, integrating APIs, and writing clean, maintainable code that improves performance and user experience.";
  const recommendations = [
    '"I highly recommend Carlos Cardenas for any software development project. He is a true professional and a pleasure to work with."',
    '"Carlos Cardenas consistently delivers high quality code and approaches every project with focus, reliability, and a strong work ethic."',
    '"Working with Carlos was a great experience—he\'s collaborative, quick to solve problems, and always ready to learn something new."',
  ];
  const isDesktop = useMediaQuery({ minWidth: 1350 });
  return (
    <div>
      {isDesktop && (
        <div className="fixed top-0 bottom-0 bg-[#FAFAFA] w-[2px] h-full ml-20 z-50"></div>
      )}
      <Hero resources={resources} />
      <Introduction paragraph={paragraph} />
      <Projects recommendations={recommendations} />
      <ContactForm />
    </div>
  );
}

const resources = [
  {
    href: "",
    text: "This is the software developers brand logo",
    icon: (
      <img
        src="/logo-carlos.png"
        alt="Resource Icon"
        className="w-[163px] h-[153px]"
      />
    ),
  },
];
