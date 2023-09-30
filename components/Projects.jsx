import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const _projects = [
    {
        name: "PLAY ON",
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
                <motion.div
                    layoutId="project1_out"
                    onClick={() => setProject1(!project1)}
                    className="bg-background-dark rounded-lg hover:drop-shadow-[0_10px_5px_rgba(0,0,0,0.25)] w-full h-[16rem]">
                    {!project1 && (
                        <motion.div className="">
                            <motion.div className="bg-background-dark rounded-lg">
                                
                            </motion.div>
                            <motion.div className="fixed bottom-0 bg-primary rounded-lg h-[2rem] text-white">
                                Play On
                            </motion.div>
                        </motion.div>
                    )}
                    <AnimatePresence>
                        {project1 && (
                            <motion.div
                                key={'modal_project1'}
                                layoutId={'project1_in'}
                                onClick={() => setProject1(!project1)}
                                className="w-full h-full bg-primary rounded-lg text-white bottom-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 2 }}
                                exit={{ opacity: 0 }}>
                                {/* div that pops up */}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}