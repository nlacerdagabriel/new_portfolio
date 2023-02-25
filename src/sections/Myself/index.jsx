import { Container } from "./styles";

export const Myself = () => {
  return (
    <Container>
      <div className="image"></div>

      <h1>
        I'm <span>Gabriel Lacerda</span> <p>Frontend Developer.</p>
      </h1>

      <p>
        I'm a 20-year-old Brazilian with 2 years of experience in both backend
        and frontend programming. My love for technology and ability to learn
        and adapt quickly to new technologies make me a valuable professional in
        software development projects.
      </p>

      <div className="buttons">
        <button>Linkedin</button>
        <button>Hire me</button>
      </div>
    </Container>
  );
};
