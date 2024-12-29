import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiWindows,
  SiAndroid,
  SiApple,
  SiGithub,
  SiMysql,
  SiFirebase,
  SiIntellijidea,
  SiDiscord,
  SiUnity,
  SiAnaconda,
} from "react-icons/si";
import { AiOutlineRobot } from "react-icons/ai";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiWindows />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Windows</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiAndroid />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Android</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiApple />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Apple</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiVisualstudiocode />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiPostman />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiSlack />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Slack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiVercel />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiGithub />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiMysql />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>SQL Developer</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiIntellijidea />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>IntelliJ IDEA</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiFirebase />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiDiscord />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Discord</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiUnity />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Unity</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <SiAnaconda />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>Anaconda</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "0.2em" }}>
        <AiOutlineRobot />
        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "0.2em" }}>ChatGPT</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
