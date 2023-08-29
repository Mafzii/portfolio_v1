import React from "react";

const _experience = [
    {
        id: 1,
        place: "TECHLOGIX",
        title: "Software Engineer",
        date: "Jun 2023 - Present",
        info: "Working with a leading bank in Pakistan to create a digital banking platform. Building using Oracle's OBDX system. Full Stack development using Java and JS.",
        tech: ["java", "javascript", "knockout.js", "oracle", "cordova", "git", "jira", "obdx"],
    },
    {
        id: 2,
        place: "HASHMOVE",
        title: "Front-end Developer",
        date: "Jun 2023 - Jul 2023",
        info: "Learnt how to build responsive and scalable web applications. Worked on building a notifications center with lazy loading to reduce volume of data fetched. Designed a component for warehouse and train activity.",
        tech: ["angular", "typescript", "html", "css", "figma"],
    },
    {
        id: 3,
        place: "MICROSOFT",
        title: "Technical Intern",
        date: "Jun 2018",
        info: "Compiled a report on the state of Artificial Intelligence in Pakistan by researching about local software houses and start-ups. Performed a training session in the capacity of Technical Intern as per the Microsoft System.",
    }
]

export default function Experience() {
    return (
        <section className="my-4">
            <h1 className="text-black text-3xl tracking-tight">experience...</h1>
            <div className="my-4">
                {
                    _experience.map((info) => {
                        return (
                            <div key={info["id"]} className="mb-4">
                                <div className="grid grid-cols-6 gap-0">
                                    <div className="col-span-2">
                                        <h3 className="text-text font-bold">{info["place"]}</h3>
                                        <p className="text-secondary text-lg">{info["title"]}</p>
                                        <p className="text-secondary font-light text-sm tracking-tight">{info["date"]}</p>
                                    </div>
                                    <div className="col-span-4">
                                        <div className="bg-background-dark rounded-md p-4 drop-shadow-lg">
                                            <p className="text-secondary tracking-tight font-sm">{info["info"]}</p>
                                        </div>
                                        <div className="flex flex-wrap mt-2">
                                            {
                                                info["tech"] ? (
                                                    info["tech"].map((chip) => {
                                                        return (
                                                            <div key={info["id"]} className="mt-1 me-1 rounded-lg bg-transparent py-1 px-3 border-2 border-solid border-background-dark">
                                                                <p className="text-text text-xs font-light">{chip}</p>
                                                            </div>
                                                        )
                                                    })
                                                ) : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}