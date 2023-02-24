import { Container } from "./styles";

export const Myself = () => {
  return (
    <Container>
      <div className="image"></div>

      <h1>
        I'm <span>Gabriel Lacerda</span> <p>Frontend Developer.</p>
      </h1>

      <p>
        I'm the Front-End Developer for #Company in USA, OR. I have serious
        passion for UI effects, animations and creating intuitive, dynamic user
        experiences.
      </p>

      <div className="buttons">
        <button>Linkedin</button>
        <button>Hire me</button>
      </div>
    </Container>
  );
};
