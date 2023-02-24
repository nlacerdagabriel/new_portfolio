import { Container } from "./styles";

export const Card = ({ title, children, mb, padding }) => {
  return (
    <Container padding={padding} mb={mb}>
      {title && <h1>{title}</h1>}
      {children}
    </Container>
  );
};
