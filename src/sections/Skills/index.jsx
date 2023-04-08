import { Container } from "./styles";
import { Card } from "../../components/Card";

import {
  SiGithub,
  SiGit,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiWordpress,
  SiReact,
  SiAdonisjs
} from "react-icons/si";
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const [t, i18n] = useTranslation("global");


  return (
    <Card title={t("mySkills.title")}>
      <Container>
        <Card mb={"0"} padding={"1rem"}>
          <SiGit color="#E84D31" />
        </Card>
        <Card mb={"0"} padding={"1rem"}>
          <SiGithub color="171515" />
        </Card>
        <Card mb={"0"} padding={"1rem"}>
          <SiHtml5 color="#DD4B25" />
        </Card>
        <Card mb={"0"} padding={"1rem"}>
          <SiCss3 color="#3C96D1" />
        </Card>
        <Card mb={"0"} padding={"1rem"}>
          <SiJavascript color="#E8D44D" />
        </Card>
        <Card mb={"0"} padding={"1rem"}>
          <SiTypescript color="#0176C5" />
        </Card>
        <Card mb={"0"} padding={"1rem"}>
          <SiPhp color="#7377AD" />
        </Card>
        <Card mb={"0"} padding={"1rem"}>
          <SiWordpress color="#207196" />
        </Card>
        <Card mb={"0"} padding={"1rem"}>
          <SiReact color="#00D1F7" />
        </Card>
        <Card mb={"0"} padding={"1rem"}>
          <SiAdonisjs color="#5743F7" />
        </Card>
      </Container>
    </Card>
  );
};
