import React from "react";

const _experience = [
    {
        id:1,
        place: "TECHLOGIX",
        title: "Software Engineer",
    },
    {
        id:2,
        place: "HASHMOVE",
        title: "Front-end Developer",
    },
    {
        id:3,
        place: "MICROSOFT",
        title: "Technical Intern",
    }
] 

export default function Experience () {
    return (
        <section className="">
            <h1 className="text-black text-3xl tracking-tight">experience...</h1>
            <div className="p-4 px-0">
                {
                    _experience.map((info) => {
                        return (
                            <div key={info['id']} className="pb-4">
                                <div className="grid grid-cols-6 gap-0">
                                    <div className="col-span-2">
                                        <h3 className="text-text font-bold">{info["place"]}</h3>
                                        <p className="text-secondary">{info["title"]}</p>
                                    </div>
                                    <div className="col-span-4 bg-background-dark rounded-md p-4 shadow-lg">
                                        <p className="text-black tracking-tight font-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! </p>
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