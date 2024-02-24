import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import flowFieldGif from "../public/image/flow-fields.gif";

const _projects = [
  {
    name: "flow system",
    image: flowFieldGif,
    description:
      "Particle system following 2D Perlin noise vectors with control variables to create custom flow fields",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="my-4">
      <h1 className="text-black text-3xl tracking-tight">projects...</h1>
      <div className="my-4">
        {_projects.map((info, index) => (
          <div key={"project-" + index} className="my-6 flex flex-col">
            <div className="flex flex-wrap md:flex-nowrap gap-0 md:gap-4">
              <div className="relative h-52 md:h-auto basis-full md:basis-3/5 flex-grow-0 bg-background-dark rounded-t-md md:rounded-md">
                <Image
                  fill
                  src={info.image}
                  alt="Gif of the project"
                  className="w-full rounded-md p-4 object-cover"
                  format="gif"
                />
              </div>
              <div className="basis-full md:basis-2/5 flex-grow-0 flex flex-col-reverse md:flex-col">
                <div className="flex items-end mt-1 md:mt-16">
                  <h1 className="tracking-tight text-2xl md:text-3xl">
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
