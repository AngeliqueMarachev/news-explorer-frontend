import React from "react";
import "./About.css";
import mePath from "../../images/me.jpg";

export default function About() {
  return (
    <>
      <img
        className="about__image"
        src={mePath}
        alt={"Angelique Marachev"}
      ></img>
      <div className="about__container">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">This block describes the project author.</p>
        <p className="about__text">
          Here you should indicate your name, what you do, and which development
          technologies you know.
        </p>
        <p className="about__text">
          You can also talk about your experience with Practicum, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </>
  );
}
