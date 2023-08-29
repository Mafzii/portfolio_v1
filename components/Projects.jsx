import React from "react";

const _projects = [
    {},
    {},
    {},
];

export default function Projects() {
    return (
        <section className="my-4 drop-shadow-lg">
            <h1 className="text-black text-3xl tracking-tight">projects...</h1>
            <div className="my-4 flex flex-row flex-wrap">
                {
                    _projects.map((project) => {
                        return (
                            <div className="bg-background-dark rounded-lg hover:drop-shadow-[0_10px_5px_rgba(0,0,0,0.25)] w-1/2 h-[24rem]">
                                <div className="grid grid-col">
                                    <div className="bg-background rounded-lg h-[16rem]"></div>
                                    <div className="bg-background-dark rounded-b-lg h-[8rem]"></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}