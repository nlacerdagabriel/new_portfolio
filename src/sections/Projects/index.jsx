import { Container } from "./styles";
import { Card } from "../../components/Card";
import { Project } from "../../components/Project";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import { api } from "../../api";
import { projectsData } from "../../data/projects";

export const Projects = () => {
  const [projects, setProjects] = useState(projectsData);

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const response = await api.get("/projects?populate=*");
  //       const currentProjects = response.data.data;
  //       setProjects(currentProjects);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchProjects();
  // }, []);

  return (
    <Card title="Projects">
      <Container>
        <Carousel showThumbs={false}>
          {projects.map((project, index) => (
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
