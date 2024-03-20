import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Hukuda Takuya </span>
                 and I'm from <span className="yellow"> Kuala Lumpur in Malaysia.</span>
                <br />
                <br />
                With a solid 6-year background in smart contract and Web3 development, I bring expertise across multiple blockchain platforms including Ethereum, Cardano, Tron, and ICP. 
                <br />
                <br />
                  As a
                  <b className="yellow"> Senior </b>developer, committed to fostering a positive and collaborative atmosphere, I strive to deliver innovative decentralized solutions while embracing a friendly and approachable demeanor.
                  Proficient in 
                  <br />
                  <br />I am proficient in both
                    <b className="yellow"> Solidity </b>
                    and <b className="yellow"> Rust </b>, I've successfully deployed contracts on <b className="yellow"> Ethereum </b>, <b className="yellow"> Solana </b>, and <b className="yellow"> Near </b> protocols, utilizing tools like Hardhat, Truffle, Brownie, and Embark.
                  <br />
                  <br />
                  I have a passion for working
                  with <b className="yellow">Node.js, MongoDB, Golang, Nest.js</b> and
                  <i>
                    <b className="yellow">
                      {" "}
                      modern TypeScript frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="yellow"> Next.js</b>
                  </i>
                  <br />
                  <br />
                  I've contributed to numerous projects utilizing Hugging Face's models and libraries, particularly focusing on <b className="yellow"> natural language processing (NLP) </b> tasks.
                  
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/gentlepuck071"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/gentlepuck071"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/gentlepuck071/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/gentlepuck071/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About