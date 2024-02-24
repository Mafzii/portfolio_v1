import React from "react";

const _experience = [
  {
    place: "TECHLOGIX",
    title: "Software Engineer",
    date: "Jun 2023 - Present",
    info: "Working with a leading bank in Pakistan to create a digital banking platform using Oracle's OBDX system. Full Stack development using Java and JS.",
    tech: [
      "java",
      "javascript",
      "knockout.js",
      "oracleDB",
      "jenkins",
      "git",
      "jira",
      "obdx",
    ],
  },
  {
    place: "HASHMOVE",
    title: "Frontend Development Intern",
    date: "Jun 2023 - Jul 2023",
    info: "Learnt how to build responsive and scalable web applications. Implemented a notifications center with lazy loading and pagination with Angular. Designed components for warehouse and train activity in Figma.",
    tech: ["angular", "typescript", "html", "css", "figma"],
  },
  {
    place: "MICROSOFT",
    title: "Technical Intern",
    date: "Jun 2018",
    info: "Compiled a report on the state of Artificial Intelligence in Pakistan by researching about local software houses and start-ups. Performed a training session in the capacity of Technical Intern as per the Microsoft System.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="my-4">
      <h1 className="text-black text-3xl tracking-tight">experience...</h1>
      <div className="my-4">
        {_experience.map((info, index) => {
          return (
            <div key={"experience-" + index} className="mb-4">
              <div className="grid grid-cols-6 gap-0 mb-5">
                <div className="col-span-6 md:col-span-2 flex justify-between items-end md:block mb-1">
                  <div>
                    <h3 className="text-text font-bold">{info["place"]}</h3>
                    <p className="text-secondary text-sm md:text-lg">{info["title"]}</p>
                  </div>
                  <p className="text-secondary font-light text-sm tracking-tight">
                    {info["date"]}
                  </p>
                </div>
                <div className="col-span-6 md:col-span-4">
                  <div className="bg-background-dark rounded-md p-4 drop-shadow-lg">
                    <p className="text-secondary tracking-tight font-sm">
                      {info["info"]}
                    </p>
                  </div>
                  <div className="flex flex-wrap mt-2">
                    {info["tech"]
                      ? info["tech"].map((chip, index) => {
                          return (
                            <div
                              key={"chip-" + index}
                              className="mt-1 me-1 rounded-lg bg-transparent py-1 px-3 border-2 border-solid border-background-dark"
                            >
                              <p className="text-text text-xs font-light">
                                {chip}
                              </p>
                            </div>
                          );
                        })
                      : null}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
