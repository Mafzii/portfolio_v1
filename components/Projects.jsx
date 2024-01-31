import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const _projects = [
  {
    name: "flow fields",
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
  return (
    <section id="projects" className="my-4 drop-shadow-lg">
      <h1 className="text-black text-3xl tracking-tight">projects...</h1>
      <div className="my-4 grid grid-flow-row grid-cols-2 gap-2">
        
      </div>
    </section>
  );
}
