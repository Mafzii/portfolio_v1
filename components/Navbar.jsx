import { React, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/github";
import "react-social-icons/linkedin";
import "react-social-icons/twitter";
import "react-social-icons/instagram";
import { sendContactForm } from "@/lib/api";
import downloadIcon from "../public/download.jpg";
import profilePic from "../public/image/_profile.jpeg";

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  // form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showContactForm, setShowContactForm] = useState(false);

  // form validation
  const [honeyPot, setHoneyPot] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // scroll to functionality
  const ref = useRef(null);
  const navSwitch = useInView(ref);

  const scrollTo = function (target) {
    const element = document.getElementById(target);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  const handleContactFormSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (honeyPot) {
      return;
    }
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!name || !email || !message) {
      setError("All fields are required!");
      return;
    } else if (!regex.test(email)) {
      setError("Is that a valid email?");
      return;
    } else if (message.length < 10) {
      setError("Message must be longer!!!");
      return;
    }

    setLoading(true);
    const response = await sendContactForm({ name, email, message });
    setLoading(false);

    if (response.message == "Bad Request") {
      setError("Something went wrong!");
      return;
    }
    if (response.message === "Message sent") {
      setSuccess("Thank you for reaching out!");
    }
  };

  return (
    <section>
      <div ref={ref} className="p-8"></div>
      <div className="flex flex-wrap-reverse justify-center md:justify-between">
        <div className="w-fit">
          <h1 className="text-4xl font-bold tracking-wide mt-3 md:mt-0">
            mustafa afzal
          </h1>
          <h2 className="text-text text-2xl text-center md:text-left mb-3 md:mb-0">
            Software Engineer
          </h2>
          <div className="flex md:block">
            <div className="py-2">
              <SocialIcon
                className="me-3"
                url="https://github.com/Mafzii"
                bgColor={"#000000"}
                style={{ height: "2rem", width: "2rem" }}
                target="_blank"
              />
              <SocialIcon
                className="me-3"
                url="https://linkedin.com/in/mustafa-afzal"
                bgColor={"#000000"}
                style={{ height: "2rem", width: "2rem" }}
                target="_blank"
              />
              <SocialIcon
                className="me-3"
                url="https://instagram.com/mustafa_afzal/"
                bgColor={"#000814"}
                style={{ height: "2rem", width: "2rem" }}
                target="_blank"
              />
            </div>
            {/* <a
              download
              href="MustafaAfzal_CV.pdf"
              className="bg-primary w-fit my-1 py-2 md:py-1 px-3 rounded-full text-white flex"
            >
              <span>resume</span>
              <div className="m-auto ms-2">
                <Image
                  alt="download resume"
                  src={downloadIcon}
                  width={14}
                  height={14}
                />
              </div>
            </a> */}
          </div>
        </div>
        <div className=" w-52 h-52">
          <div className="relative">
            <div className="absolute w-full h-full rounded full z-0 bg-gradient"></div>
            <div className="flex justify-center relative z-10">
              <Image
                alt="profile picture"
                className="rounded-full pointer-events-none"
                src={profilePic}
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
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: -50 }}
            transition={{ duration: 0.5 }}
            className="z-10 fixed top-0 left-0 w-full h-12 bg-background-dark rounded-b-lg shadow-lg pt-1"
          >
            <div className="flex justify-between max-w-2xl mx-auto">
              <div className="flex justify-between w-fit">
                <p className="m-2 hover:text-text cursor-pointer">
                  <a onClick={() => scrollTo("about")}>/about</a>
                </p>
                <p className="m-2 hover:text-text cursor-pointer">
                  <a onClick={() => scrollTo("experience")}>/experience</a>
                </p>
                <p className="m-2 hover:text-text cursor-pointer">
                  <a onClick={() => scrollTo("projects")}>/projects</a>
                </p>
              </div>
              <div className="flex p-1 bg-secondary hover:bg-primary rounded-md my-auto w-fit me-2 md:me-0">
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
              setError("");
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
                  I'm always open to new opportunities and collaborations.
                </p>
              </div>
              <form noValidate onSubmit={handleContactFormSubmit}>
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center bg-red-100 text-red-500 p-2 rounded-md mb-2"
                    >
                      {error}
                    </motion.div>
                  )}
                  {success && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center bg-green-100 text-green-500 p-2 rounded-md mb-2"
                    >
                      {success}
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="flex flex-col">
                  <label htmlFor="name">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="rounded-md p-2 mb-2"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="rounded-md p-2 mb-2"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="rounded-md p-2 min-h-[3rem] max-h-32"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="hidden">
                  <label htmlFor="honeyPot">
                    If you are a human, leave this field empty
                  </label>
                  <input
                    type="text"
                    value={honeyPot}
                    onChange={(e) => setHoneyPot(e.target.value)}
                  />
                </div>
                <div className="flex justify-end">
                  {loading ? (
                    <button
                      disabled
                      id="loading"
                      className="bg-primary text-white rounded-md px-6 mt-4 flex justify-between items-center h-10 w-20 pt-1"
                    >
                      <div className="h-2 w-2 bg-background rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="h-2 w-2 bg-background rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="h-2 w-2 bg-background rounded-full animate-bounce"></div>
                    </button>
                  ) : (
                    <button
                      id="submit"
                      type="submit"
                      className="bg-primary text-white rounded-md p-2 mt-4 h-10 w-20"
                    >
                      Submit
                    </button>
                  )}
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
