import React from "react";
import "./About.css";
import mePath from "../../images/me.jpg";

export default function About() {
  return (
    <section className="about">
      <img className="about__image" src={mePath} alt={"Angelique Marachev"} />
      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          My name is Angelique Marachev. Welcome to my final project! <br />
          <br />I began studying full-stack web development at Practicum in
          2022. It was one of the most challenging years of my life as we jumped
          from HTML and CSS, to JavaScript and Object-oriented Programming,
          followed by React, Node.js, and MongoDB, through to building a server
          on a virtual machine on the cloud. I have developed 15 projects to
          date including landing pages and fully-functional web apps using an
          array of front-end and back-end technologies.
        </p>
        <p className="about__text">
          Even though I started with zero previous programming experience, it
          has been the most empowering year. This project is a symbol of great
          struggle and great achievement. I hope it will encourage you to rise
          to a new challenge and expand the boundaries of what you thought was
          possible.
          <br />
          <br /> Lessss go!
        </p>
      </div>
    </section>
  );
}
