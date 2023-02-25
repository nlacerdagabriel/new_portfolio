import { useEffect, useState } from "react";
import { api } from "../../api";
import { Project } from "../Project";
import { Container } from "./styles";
import {
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/wp/v2/projects");
        const projectIds = response.data.map((project) => project.id);
        const requests = projectIds.map((id) =>
          api.get(`/wp/v2/projects/${id}?_embed`)
        );
        const responses = await Promise.all(requests);
        const currentProjects = responses.map((response) => response.data);
        setProjects(currentProjects);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < projects.length - 1 ? prev + 1 : prev));
  };

  const currentProject = projects[currentSlide];

  return (
    <Container>
      <Project
        image={currentProject?._embedded?.["wp:featuredmedia"]?.[0].source_url}
        title={currentProject?.title?.rendered}
      >
        {currentProject?.content?.rendered}
      </Project>

      <div className="buttons">
        <button onClick={prevSlide}>
          <FaArrowLeft />
        </button>
        <button onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>
    </Container>
  );
};
