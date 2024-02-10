import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const _projects = [
  {
    name: "flow system",
    image: "/image/flow-fields.gif",
    description:
      "Creative coding project stemming from an interest in creating a randomized particle system",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="my-4">
      <h1 className="text-black text-3xl tracking-tight">projects...</h1>
      <div className="my-4">
        {_projects.map((project, index) => (
          <div className="my-6 grid grid-flow-row grid-cols-2 gap-6">
            <div className="w-full bg-background-dark rounded-md p-4 drop-shadow-lg">
              <Image
                src={project.image}
                alt="Gif of the project"
                format="gif"
                layout="fill"
                objectFit="cover"
                className="rounded-md p-4"
              />
            </div>
            <div className="grid grid-flow-row grid-rows-2">
              <div className="flex items-end">
                <h1 className="font-light tracking-tight text-3xl">
                  {project.name}
                </h1>
              </div>
              <div className="bg-primary text-background rounded-md p-4 drop-shadow-lg">{project.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
