import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/legacy/image";

const _projects = [
  {
    name: "flow system",
    image: "/image/flow-fields.gif",
    description:
      "Creative coding project stemming from an interest in creating a randomized particle system",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="my-4">
      <h1 className="text-black text-3xl tracking-tight">projects...</h1>
      <div className="my-4">
        {_projects.map((info, index) => (
          <div
            key={"project-" + index}
            className="my-6 md:grid grid-flow-row grid-cols-2 gap-x-6 gap-y-2"
          >
              <Image
                priority // possibly remove if causing performance issues
                src={info.image}
                alt="Gif of the project"
                width="0"
                height="0"
                className="col-span-2 md:col-span-1 w-full h-52 md:h-auto rounded-md p-4"
                objectFit="cover"
                format="gif"
              />
            <div className="grid grid-flow-row grid-rows-2">
              <div className="flex items-end">
                <h1 className="font-light tracking-tight text-3xl">
                  {info.name}
                </h1>
              </div>
              <div className="bg-primary text-background rounded-md p-4 drop-shadow-lg">
                {info.description}
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex flex-wrap">
                {info["tech"]
                  ? info["tech"].map((chip, index) => {
                      return (
                        <div
                          key={"chip-" + index}
                          className="mt-1 me-1 rounded-lg bg-transparent py-1 px-3 border-2 border-solid border-background-dark"
                        >
                          <p className="text-text text-xs font-light">{chip}</p>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
