import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const _projects = [
    {},
    {},
    {},
    {},
];

export default function Projects() {
    const [selectedId, setSelectedId] = useState(null);
    return (
        <section id="projects" className="my-4 drop-shadow-lg">
            <h1 className="text-black text-3xl tracking-tight">projects...</h1>
            <div className="my-4 grid grid-flow-row grid-cols-2 gap-2">
                { // change opacity animation to scale on this part of the code
                    _projects.map((project, index) => {
                        return (
                            <motion.div
                                key={'project' + index}
                                layoutId={'project' + index}
                                onClick={() => setSelectedId('project' + index)}
                                className="bg-background-dark rounded-lg hover:drop-shadow-[0_10px_5px_rgba(0,0,0,0.25)] w-full h-[16rem]">
                                <motion.div className="bg-background-dark rounded-lg h-[12rem]"></motion.div>
                                <motion.div className="bg-primary rounded-lg h-[4rem]"></motion.div>
                            </motion.div>
                        )
                    })
                }
                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            key={'modal' + selectedId}
                            layoutId={selectedId}
                            onClick={() => setSelectedId(null)}
                            className="fixed left-0 w-full h-[32.5rem] bg-transparent"
                            initial={{ scale: 0 }}
                            animate={{ scale: 2 }}
                            exit={{ scale: 0 }}>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="bg-background-dark rounded-lg w-full h-full">
                                <motion.div className="">
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}