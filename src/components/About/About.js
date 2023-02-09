import React from "react";
import "./About.css";
import mePath from "../../images/me.jpg";

export default function About() {
  return (
    <section className="about__container">
      <img className="about__image" src={mePath} alt={"Angelique Marachev"} />
      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">This block describes the project author.
          Here you should indicate your name, what you do, and which development
          technologies you know.
          </p>
         <p className="about__text">
          You can also talk about your experience with Practicum, what you
          learned there, and how you can help potential customers.
        </p>

      </div>
    </section>
  );
}
