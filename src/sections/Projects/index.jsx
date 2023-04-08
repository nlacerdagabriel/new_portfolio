import { Container } from "./styles";
import { Card } from "../../components/Card";
import { Project } from "../../components/Project";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";


export const Projects = () => {
  const [t, i18n] = useTranslation("global");
  const projects = t("myProjects.projects", { returnObjects: true });

  return (
    <Card title={t("myProjects.title")}>

      <Container>
        <Carousel showThumbs={false}>


          {projects.map((project) => (
            <Project
              key={project.id}
              url={project.url && project.url}
              code={project.code && project.code}
              image={`${project.image}`}
              title={project.title}
              description={project.description}
              skills={project.skills}
            />
          ))}

        </Carousel>
      </Container>
    </Card>
  );
};
