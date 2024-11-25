import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import flowFieldGif from "../public/image/flow-fields.gif";
import fileWiz from "../public/image/fileWiz.png"

const _projects = [
  {
    name: "fileWiz",
    image: fileWiz,
    description:
      "Graphical tool to manage files and directories with a simple and intuitive interface (In Progress)",
    tech: ["TypeScript", "Node.js", "Electron"],
    link: "https://github.com/Mafzii/file-visualizer",
  },
  {
    name: "flow system",
    image: flowFieldGif,
    description:
      "Particle system following 2D Perlin noise vectors with control variables to create custom flow fields",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Mafzii/particle-system",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="my-4">
      <h1 className="text-text text-3xl tracking-tight">projects...</h1>
      <p className="text-primary text-xs font-semibold pt-1">
        <span className="font-extrabold">NOTE:</span> These are just projects
        from 2024 onwards. Older projects can be found on my GitHub or resume.
      </p>
      <div className="my-4">
        {_projects.map((info, index) => (
          <div key={"project-" + index} className="my-6 flex flex-col">
            <div className="flex flex-wrap md:flex-nowrap gap-0 md:gap-4">
              <div className="md:hidden basis-full md:basis-2/5 flex-grow-0 flex flex-col-reverse md:flex-col">
                <div className="flex items-end mt-1 md:mt-16">
                  <h1 className="tracking-tight text-2xl md:text-3xl">
                    {info.name}
                  </h1>
                </div>
              </div>
              <div className="relative h-52 md:h-auto basis-full md:basis-3/5 flex-grow-0 bg-background-dark rounded-t-md md:rounded-md">
                <a target="_blank" href={info.link}>
                  <Image
                    fill
                    src={info.image}
                    alt="Gif of the project"
                    className="w-full rounded-md p-4 object-cover"
                    format="gif"
                  />
                </a>
              </div>
              <div className="basis-full md:basis-2/5 flex-grow-0 flex flex-col-reverse md:flex-col">
                <div className="flex items-end mt-1 md:mt-16">
                  <h1 className="hidden md:block tracking-tight text-2xl md:text-3xl">
                    {info.name}
                  </h1>
                </div>
                <div className="bg-primary text-background rounded-b-md md:rounded-md p-4 drop-shadow-lg">
                  {info.description}
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-wrap md:mt-2">
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
