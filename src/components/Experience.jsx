import React from "react";
import "../css/experience.css";

const Experience = (props) => {
  return (
    <div className="container my-5 py-5">
      <h3 className="text-uppercase">Experience</h3>
      <p className="text-secondary pb-4">
        Few of my past work places and responsibilities.
      </p>
      <div className="mb-4 job-container">
        <h5 className="highlight-text font-weight-bold m-0">Pfizer</h5>
        <p className="m-0">Digital Rotational Associate</p>
        <p className="text-secondary mb-2">Jan 2020 – Present</p>
        <ul>
          <li>
            Built dashboards using SAP Analytics Cloud (visualization tool) and
            queries using SAP HANA to provide relevant data
          </li>
          <li>
            Lead a team of developers to build a chatbot by gathering
            requirements, translating technical needs and presenting product to
            business users, designing UI and UX mockups, and facilitating daily
            standup meetings
          </li>
          <li>
            Developed automated reports to analyze user behavior, improving user
            adoption of a financial reporting application from 56% to 93%,
            beating a 75% target in first quarter
          </li>
          <li>
            Developed an augmented reality mobile application experience by
            integrating PTC’s Vuforia Studio and ThingWorx as a proof of to
            digitize Pfizer’s supply chain
          </li>
        </ul>
      </div>
      <div className="job-container">
        <h5 className="highlight-text font-weight-bold m-0">
          University of Connecticut, Innovation Lab
        </h5>
        <p className="m-0">Computer Lab Specialist</p>
        <p className="text-secondary mb-2">Sep 2018 – Dec 2019</p>
        <ul>
          <li>
            Developed self-learning online courses on various analytics tools
            such as Tableau, Splunk, SAS JMP, and SAS Enterprise Miner, to
            provide students an additional learning resource
          </li>
          <li>
            Coordinated workshops and events in partnership with organizations
            like Girls for Technology, empowering minorities and young women
            with knowledge on emerging technologies
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
export { default as Experience } from "./Experience";
