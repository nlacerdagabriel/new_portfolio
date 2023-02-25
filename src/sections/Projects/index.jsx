import { Container } from "./styles";
import { Card } from "../../components/Card";
import { Project } from "../../components/Project";
import { Carousel } from "../../components/Carousel";


export const Projects = () => {
  return (
    <Card title="Projects">
      <Container>
        <Carousel/>
      </Container>
    </Card>
  );
};
