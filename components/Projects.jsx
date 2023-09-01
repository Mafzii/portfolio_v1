import { React, useState} from "react";
import { motion, AnimatePresence } from "framer-motion";

const _projects = [
    {},
    {},
    {},
];

export default function Projects() {
    const [selectedId, setSelectedId] = useState(null)
    return (
        <section className="my-4 drop-shadow-lg">
            <h1 className="text-black text-3xl tracking-tight">projects...</h1>
            <div className="my-4 flex flex-row flex-wrap">
 
 {_projects.map((item, index) => (
   <motion.div layoutId={index+} onClick={() => setSelectedId(item.id)}>
     <motion.h5>{item.subtitle}</motion.h5>
     <motion.h2>{item.title}</motion.h2>
   </motion.div>
 ))}
 
 <AnimatePresence>
   {selectedId && (
     <motion.div layoutId={selectedId}>
       <motion.h5>{item.subtitle}</motion.h5>
       <motion.h2>{item.title}</motion.h2>
       <motion.button onClick={() => setSelectedId(null)} />
     </motion.div>
   )}
 </AnimatePresence>
                {
                    _projects.map((project) => {
                        return (
                            <div className="bg-background-dark rounded-lg hover:drop-shadow-[0_10px_5px_rgba(0,0,0,0.25)] w-1/2 h-[16rem]">
                                <div className="grid grid-col">
                                    <div className="bg-background-dark rounded-lg h-[12rem]"></div>
                                    <div className="bg-primary rounded-lg h-[4rem]"></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}