import { useEffect } from "react";
import { Container, Links, Skills } from "./styles";
import { useTranslation } from "react-i18next";

export const Project = ({ image, title, description, url, skills, code }) => {

  const [t, i18n] = useTranslation("global");


  return (
    <Container>
      <img src={image} alt="" />
      <Links>
        {url && (
          <a href={url} target="_blank">
            {t("myProjects.seeProject")}
          </a>
        )}
        {code && (
          <a href={code} target="_blank">
            {t("myProjects.seeCode")}
          </a>
        )}
      </Links>

      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <Skills>
        {skills && skills.map((skill, index) => <li key={index}>{skill}</li>)}{" "}
      </Skills>
    </Container>
  );
};
