import { React } from "react";

const About = () => {
  return (
    <section id="about" className="my-4">
      <h1 className="text-black text-3xl tracking-tight">about...</h1>
      <div className="grid grid-cols-6">
        <div className="bg-primary text-background drop-shadow-lg rounded-lg p-4 col-span-6 my-4">
          <p>
            A dedicated and enthusiastic builder making interesting things on
            the internet.
          </p>
          <br />
          <p>
            I am a full-stack developer who enjoys learning new tech, looking
            for fun projects to work on and cool people to work with.
          </p>
          <br />
          <p>
            Check out my projects and contact me if you want to work together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
