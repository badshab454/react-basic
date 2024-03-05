import React from "react";
import Title from "../components/Title";

import Paragraph from "../components/Paragraph";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Title value = "This is props Title."/>
      <Paragraph value = "This is props paragraph."/>
    </div>
  );
};

export default About;
