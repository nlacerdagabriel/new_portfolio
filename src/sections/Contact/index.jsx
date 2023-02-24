import { Container } from "./styles";
import { Card } from "../../components/Card";

export const Contact = () => {
  return (
    <Card>
      <Container>
        <div>
          <input type="text" />
          <input type="text" />
        </div>

        <input type="email" />

        <input type="text" />

        <textarea></textarea>

        <button>Send message</button>
      </Container>
    </Card>
  );
};
