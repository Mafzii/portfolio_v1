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
    // make a usestate for all 4 projects
    const [project1, setProject1] = useState(false);
    const project2 = useState(false);
    const project3 = useState(false);
    const project4 = useState(false);

    return (
        <section id="projects" className="my-4 drop-shadow-lg">
            <h1 className="text-black text-3xl tracking-tight">projects...</h1>
            <div className="my-4 grid grid-flow-row grid-cols-2 gap-2">
                {/* make animation so that green title expands upwards to fill the whole card and information is shown there:
                on default it should show title and a small gif of the project
                */}
                {
                    // _projects.map((project, index) => {
                    //     return (
                    //         <motion.div
                    //             key={'project' + index}
                    //             layoutId={'project' + index}
                    //             onClick={() => setSelectedId('project' + index)}
                    //             className="relative bg-background-dark rounded-lg hover:drop-shadow-[0_10px_5px_rgba(0,0,0,0.25)] w-full h-[16rem]">
                    //             <AnimatePresence>
                    //                 {selectedId && (
                    //                     <motion.div
                    //                         key={'modal' + selectedId}
                    //                         layoutId={selectedId}
                    //                         onClick={() => setSelectedId(null)}
                    //                         className="fixed w-1/2 h-[16.25rem] bg-transparent"
                    //                         initial={{ scale: 0 }}
                    //                         animate={{ scale: 2 }}
                    //                         exit={{ scale: 0 }}>
                    //                         <motion.div className="h-full w-full bg-primary rounded-lg text-white bottom-0">
                    //                             <div className="h-full text-2xl flex justify-start p-2 px-4">
                    //                                 <h1 className="text-sm">pp</h1>
                    //                             </div>

                    //                         </motion.div>
                    //                     </motion.div>
                    //                 )}
                    //             </AnimatePresence>
                    //                 {!selectedId && (
                    //                     <motion.div>
                    //                         <motion.div className="bg-background-dark rounded-lg">
                    //                             {/* main container before animation */}
                    //                         </motion.div>
                    //                         <motion.div className="absolute w-full bg-primary rounded-lg text-white bottom-0">
                    //                             <div className="h-full text-2xl flex justify-start p-2 px-4">
                    //                                 <h1 className="text-sm">{project["name"]}</h1>
                    //                             </div>

                    //                         </motion.div>
                    //                     </motion.div>
                    //                 )}
                    //         </motion.div>
                    //     )
                    // })
                }
                {/* make the same as above but without the map */}
                <motion.div
                    layoutId="project1_out"
                    onClick={() => setProject1(!project1)}
                    className="bg-background-dark rounded-lg hover:drop-shadow-[0_10px_5px_rgba(0,0,0,0.25)] w-full h-[16rem]">
                    {!project1 && (
                        <motion.div className="">
                            <motion.div className="bg-background-dark rounded-lg">
                                {/* main container before animation */}
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