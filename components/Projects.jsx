import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const _projects = [
  {
    name: "Flow Fields",
  },
  {
    name: "HITCHERR",
  },
  {
    name: "MOOLA",
  },
  {
    name: "SEQUENCE",
  },
];

export default function Projects() {
  const [project1, setProject1] = useState(false);
  const [project2, setProject2] = useState(false);
  const [project3, setProject3] = useState(false);
  const [project4, setProject4] = useState(false);

  return (
    <section id="projects" className="my-4 drop-shadow-lg">
      <h1 className="text-black text-3xl tracking-tight">projects...</h1>
      <div className="my-4 grid grid-flow-row grid-cols-2 gap-2">
        <div
          onClick={() => setProject1(!project1)}
          className="bg-background-dark rounded-lg h-[16rem] drop-shadow-[0_10px_5px_rgba(0,0,0,0.25)]"
        >
          <AnimatePresence mode="wait">
            {!project1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layoutId="project1_out"
              >
                <Image
                  alt="profile picture"
                  className="absolute rounded-lg"
                  src="/image/_profile.jpeg"
                  width={200}
                  height={200}
                />
                <div className="bg-primary rounded-lg text-white px-3 py-1 bottom-0 absolute w-full">{_projects[0].name}</div>
              </motion.div>
            )}
            {project1 && (
              <motion.div
                key={"modal_project1"}
                layoutId={"project1_in"}
                onClick={() => setProject1(!project1)}
                className="w-full h-full bg-primary rounded-lg text-white origin-bottom"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
              >
                {/* div that pops up */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
