import { Container } from "./styles";
import { Card } from "../../components/Card";
import { Project } from "../../components/Project";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import { api } from "../../api";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/projects?populate=*");
        const currentProjects = response.data.data;
        setProjects(currentProjects);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Card title="Projects">
      <Container>
        <Carousel showThumbs={false}>
          {projects.map((project, index) => (
            <Project
              key={project.id}
              url={project.attributes.url && project.attributes.url}
              code={project.attributes.github && project.attributes.github}
              image={`${project?.attributes?.thumb?.data?.attributes?.url}`}
              title={project.attributes.title}
              description={project.attributes.description}
              skills={project.attributes.skills}
            />
          ))}
        </Carousel>
      </Container>
    </Card>
  );
};
