import { useEffect } from "react";
import { Container, Links, Skills } from "./styles";

export const Project = ({ image, title, description, url, skills, code }) => {
  return (
    <Container>
      <img src={image} alt="" />
      <Links>
        <a href={url} target="_blank">
          See Project
        </a>
        <a href={code} target="_blank">
          See Code
        </a>
      </Links>

      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <Skills>
        {skills && skills.map((skill, index) => <li key={index}>{skill}</li>)}{" "}
      </Skills>
    </Container>
  );
};
