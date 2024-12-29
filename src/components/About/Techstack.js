import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiPython,
  DiGit,
  DiJava,
  DiReact,
  DiNodejs,
} from "react-icons/di";
import {
  SiArduino,
  SiRaspberrypi,
  SiPostgresql,
  SiFirebase,
  SiMongodb,
  SiFlutter,
  SiUnity,
} from "react-icons/si";
import { FaRobot } from "react-icons/fa";

function Techstack() {
  return (
    <div>
      <h2 className="techstack-title" style={{ textAlign: "center", paddingBottom: "20px" }}>
        My Tech Stack
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <CgCPlusPlus />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>C/C++</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <DiJava />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Java</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <DiJavascript1 />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>JavaScript/TypeScript</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <DiPython />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Python</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <SiPostgresql />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>SQL</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <DiReact />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>React.js</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <DiNodejs />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Node.js</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <SiMongodb />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>MongoDB</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <SiFirebase />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Firebase</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <SiFlutter />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Flutter</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <SiUnity />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Unity Engine</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <SiArduino />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Arduino</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <SiRaspberrypi />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Raspberry Pi</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <FaRobot />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Robotics</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
          <DiGit />
          <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Git/GitHub</p>
        </Col>
      </Row>
    </div>
  );
}

export default Techstack;
