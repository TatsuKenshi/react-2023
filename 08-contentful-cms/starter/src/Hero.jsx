import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            laboriosam adipisci est corrupti pariatur earum nisi officiis libero
            ab iste quidem sunt, nobis molestiae voluptatibus aliquid. Nihil
            omnis expedita ratione, odit assumenda, eveniet officia reiciendis
            doloribus quaerat magnam laboriosam saepe.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
