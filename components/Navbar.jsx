import React from "react";
import style from '../styles/style.module.css'
import Image from "next/image";

export default function Navbar () {
	return (
		<section>
      <div className="flex justify-between">
        <div className="w-fit">
          <h1 className="text-4xl font-bold tracking-wide">
            <a href="/">
              mustafa afzal
            </a>
          </h1>
          <h2 className="text-black text-2xl">
            Software Engineer at Techlogix
          </h2>
          <div className="py-2">
            <p><a className="hover:text-black">/about</a></p>
            <p><a className="hover:text-black">/experience</a></p>
            <p><a className="hover:text-black">/projects</a></p>
            {/* add socials icons here rather than info */}
          </div>
        </div>
        <div className=" w-52 h-52">
          <div className="relative">
            <div className="absolute w-full h-full rounded full z-0 bg-gradient"></div>
            <div className="flex justify-center relative z-10">
              <Image
              className="rounded-full pointer-events-none"
                src="/image/_profile.jpeg"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
		</section>
	)	
}