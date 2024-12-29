import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mithil Mistry </span>
            from <span className="purple"> Ahmedabad, Gujarat, India.</span>
            <br />
            I am pursuing B.Tech in Computer Science and Engineering from
            Charotar University of Science and Technology (CHARUSAT).
            <br />
            <ul>
              <li>
                Gained hands-on experience in application development as an Intern at Hidden Brains.
              </li>
              <li>
                Actively serve as Joint President and Treasurer of CHARUSAT's Economic Club "Arthyantra" and Treasurer of The Rotaract Club of CHARUSAT.
              </li>
              <li>
                Volunteered as an event organizer at a state-level tennis tournament, fostering young talent.
              </li>
              <li>
                Passionate about sports (state-level Lawn Tennis quarter-finalist) and music (distinction in nine Classical Music exams).
              </li>
            </ul>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Innovation new stuff
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The best way to predict the future is to create it, one algorithm and innovation at a time."{" "}
          </p>
          <footer className="blockquote-footer">By Mithil Mistry, Inspired by Alan Kay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
