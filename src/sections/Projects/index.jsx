import { Container } from "./styles";
import { Card } from "../../components/Card";
import { Project } from "../../components/Project";

export const Projects = () => {
  return (
    <Card title='Projects'>
      <Container>   
        <Project/>
      </Container>
    </Card>
  );
};
