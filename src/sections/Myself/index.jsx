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
        <a
        style={{marginRight: '2rem'}}
          href="https://www.linkedin.com/in/gabriel-lacerda-a46a48217/"
          target="_blank"
        >
          Linkedin
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5516988681880&text=Hello!%20I%20came%20from%20your%20portfolio%20and%20I%20want%20to%20hire%20you!"
          target="_blank"
        >
          Hire me
        </a>
      </div>
    </Container>
  );
};
