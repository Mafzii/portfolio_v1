import { React, useRef, useState } from "react";
import Image from "next/legacy/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/github";
import "react-social-icons/linkedin";
import "react-social-icons/twitter";
import "react-social-icons/instagram";

const Navbar = () => {
  const ref = useRef(null);
  const navSwitch = useInView(ref);
  const [showContactForm, setShowContactForm] = useState(false);
  const scrollTo = function (target) {
    const element = document.getElementById(target);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };
  return (
    <section>
      <div ref={ref} className="p-8"></div>
      <div className="flex justify-between">
        <div className="w-fit">
          <h1 className="text-4xl font-bold tracking-wide">
            <a href="/">mustafa afzal</a>
          </h1>
          <h2 className="text-black text-2xl">Software Engineer</h2>
          <div className="py-2">
            <SocialIcon
              className="me-3"
              url="https://github.com/Mafzii"
              bgColor={"#29524A"}
              style={{ height: "2rem", width: "2rem" }}
              target="_blank"
            />
            <SocialIcon
              className="me-3"
              url="https://instagram.com/mustafa_afzal/"
              bgColor={"#29524A"}
              style={{ height: "2rem", width: "2rem" }}
              target="_blank"
            />
            <SocialIcon
              className="me-3"
              url="https://linkedin.com/in/mustafa-afzal"
              bgColor={"#29524A"}
              style={{ height: "2rem", width: "2rem" }}
              target="_blank"
            />
          </div>
          <a
            download
            href="MustafaAfzal_CV.pdf"
            className="bg-primary w-fit my-1 py-1 px-3 rounded-full text-white flex"
          >
            <span>resume</span>
            <div className="m-auto ms-2">
              <Image
                alt="download resume"
                src="/download.jpg"
                width={14}
                height={14}
              />
            </div>
          </a>
        </div>
        <div className=" w-52 h-52">
          <div className="relative">
            <div className="absolute w-full h-full rounded full z-0 bg-gradient"></div>
            <div className="flex justify-center relative z-10">
              <Image
                alt="profile picture"
                className="rounded-full pointer-events-none"
                src="/image/_profile.jpeg"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {!navSwitch && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.5 }}
            className="z-10 fixed top-0 left-0 w-full h-12 bg-background-dark rounded-b-lg shadow-lg pt-1"
          >
            <div className="flex justify-between max-w-2xl mx-auto">
              <div className="flex justify-between w-fit">
                <p className="m-2 hover:text-black cursor-pointer">
                  <a onClick={() => scrollTo("about")}>/about</a>
                </p>
                <p className="m-2 hover:text-black cursor-pointer">
                  <a onClick={() => scrollTo("experience")}>/experience</a>
                </p>
                <p className="m-2 hover:text-black cursor-pointer">
                  <a onClick={() => scrollTo("projects")}>/projects</a>
                </p>
              </div>
              <div className="flex p-1 bg-secondary rounded-md my-auto w-fit">
                <p className="px-2 text-white cursor-pointer">
                  <a onClick={() => setShowContactForm(true)}>contact me</a>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 z-10 flex items-center justify-center"
            onClick={(e) => {
              if (e.target !== e.currentTarget) return;
              setShowContactForm(false);
            }}
          >
            <motion.div
              className="bg-background rounded-md w-96 m-auto p-8 z-50"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h1 className="text-3xl font-bold mb-1">Contact Me</h1>
                <p className="text-secondary mb-4">
                  I'm always open to new opportunities and collaborations. Feel
                  free to reach out to me.
                </p>
              </div>
              <form>
                <div className="flex flex-col">
                  <label htmlFor="name">
                    Name <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="rounded-md p-2 mb-2"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email">
                    Email <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="rounded-md p-2 mb-2"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message">
                    Message <span className="text-secondary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="rounded-md p-2 min-h-[3rem] max-h-32"
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-primary text-white rounded-md p-2 mt-4"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Navbar;
