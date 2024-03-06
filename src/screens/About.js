import React from "react";
import Title from "../components/Title";

import Paragraph from "../components/Paragraph";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Title value = "This is props Title."/>
      <Paragraph fName = "My first name is Badsha"/>
      <Paragraph lName = "My last name is Hossain"/>
    </div>
  );
};

export default About;
