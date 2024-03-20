import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import drumkit from "../assets/projects/end2end.png";
import stackoverflow from "../assets/projects/world2web3.png";
import speech from "../assets/projects/pyrin.png";
import vartalap from "../assets/projects/Vartalap.png";
import residencia from "../assets/projects/Residencia.png";
import ASocial from "../assets/projects/ASocial.png"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vartalap}
              isBlog={false}
              title="Peer-to-peer machine learning"
              description="Arbius is a decentralized network for machine learning and a token with a fixed supply like Bitcoin. New coins are generated with GPU power by participating in the network. There is no central authority to create new coins. Arbius is fully open-source. Holders vote on-chain for protocol upgrades. Models operate as DAOS with custom rules for distribution and rewards, providing a way for model creators to earn income."
              ghLink="https://github.com/green0318/G.kava"
              demoLink="https://arbius.ai/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stackoverflow}
              isBlog={false}
              title="Kava"
              description="Kava is a decentralized blockchain that combines the speed and interoperability of Cosmos with the developer power of Ethereum.
              Frontend & Smart Contract"
              ghLink="https://github.com/G.kava"
              demoLink="https://www.kava.io/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ASocial}
              isBlog={false}
              title="DUG"
              description="$DUG is a deflationary token that charges
              transactions fees on everything but buys. $DUG will be the leading dog meme project of 2024 !"
              ghLink="https://github.com/Green0318/dug-contract"
              demoLink="https://dugtoken.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={speech}
              isBlog={false}
              title="Next-Generation Decentralized Transaction Network"
              description="A novel fair-launched GhostDAG implementation, designed to provide a decentralized, high-throughput, low-latency, secure transaction network with built-in smart contracts, secured by a resource-managing proof-of-work revolution: PAIW"
              ghLink="https://github.com/gentlepuck071/pyipad"
              demoLink="https://pyrin.network/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={residencia}
              isBlog={false}
              title="Residencia (Hotel Room Booking Using Blockchain)"
              description="Ethena is a synthetic dollar protocol built on Ethereum that will provide a crypto-native solution for money not reliant on traditional banking system infrastructure, alongside a globally accessible dollar denominated savings instrument - the 'Internet Bond'."
              ghLink="https://github.com/gentlepuck071/ethena"              
              demoLink="https://www.ethena.fi"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drumkit}
              isBlog={false}
              title="CROSS-CHAIN ORACLES FOR WEB3"
              description=" DIA leverages the power of its community to scale product development and growth. Join the DAO to contribute to our mission and get rewarded."
              ghLink="https://github.com/gentlepuck071/diadata-frontend"
              demoLink="https://www.diadata.org/"
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects