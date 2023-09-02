import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const _projects = [
    {},
    {},
    {},
];

export default function Projects() {
    const [selectedId, setSelectedId] = useState(null);
    return (
        <section className="my-4 drop-shadow-lg">
            <h1 className="text-black text-3xl tracking-tight">projects...</h1>
            <div className="my-4 flex flex-row flex-wrap">
                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            key={selectedId}
                            layoutId={selectedId}
                            className="bg-background-dark rounded-lg hover:drop-shadow-[0_10px_5px_rgba(0,0,0,0.25)] w-full h-[16rem]">
                            <motion.div className="grid grid-col">
                                <div className="bg-background-dark rounded-lg h-[12rem]"></div>
                                <div className="bg-primary rounded-lg h-[4rem]"></div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
                {!selectedId ? 
                    _projects.map((project, index) => {
                        return (
                            <motion.div
                                key={'project' + index}
                                layoutId={'project' + index} onClick={() => setSelectedId(index)}
                                className="bg-background-dark rounded-lg hover:drop-shadow-[0_10px_5px_rgba(0,0,0,0.25)] w-1/2 h-[16rem]">
                                <motion.div className="grid grid-col">
                                    <div className="bg-background-dark rounded-lg h-[12rem]"></div>
                                    <div className="bg-primary rounded-lg h-[4rem]"></div>
                                </motion.div>
                            </motion.div>
                        )
                    })
                : null}
            </div>
        </section>
    )
}