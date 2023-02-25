import { Card } from "../../components/Card";
import { Container } from "./styles";

export const About = () => {
  return (
    <Card title={"About me"}>
      <Container>
        <p>
          Hello! I'm a Frontend Developer with about a year and a half of
          experience in a company from Brazil. I've always been interested in
          programming, which is why I've also been working on fullstack side
          projects where I can explore different technologies and challenges.
        </p>

        <p>
          In addition, I also work as a freelancer in my free time, which allows
          me to have more flexibility and work on varied projects. I believe
          that my passion for programming and my constant pursuit of technical
          improvement make me a valuable professional capable of delivering
          quality solutions to my clients and employers.
        </p>
      </Container>
    </Card>
  );
};
