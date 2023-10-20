import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium voluptatem maxime perspiciatis in odit consequuntur quo,
            dolore dolorum exercitationem maiores, voluptatum perferendis
            ratione ad! Aut suscipit recusandae tempore error, eligendi numquam
            nihil quam neque, iste ut nulla non? Iste nulla optio dolorem
            tempora magni unde facilis deserunt voluptates ipsam libero.
          </p>
        </article>
      </div>
    </div>
  );
};

export default About;
