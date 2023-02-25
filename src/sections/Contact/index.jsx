import { Container, Input } from "./styles";
import { Card } from "../../components/Card";

export const Contact = () => {
  return (
    <Card title='Contact with me'>
      <Container>
        <div>
          <Input width="50%">
            <label htmlFor="">Your name</label>
            <input type="text" />
          </Input>

          <Input width="50%">
            <label htmlFor="">Phone number</label>
            <input type="text" />
          </Input>
        </div>

        <Input>
          <label>Email</label>
          <input type="email" />
        </Input>

        <Input>
          <label htmlFor="">Subject</label>
          <input type="text" />
        </Input>

        <Input>
          <label htmlFor="">Message</label>
          <textarea></textarea>
        </Input>

        <button>Send message</button>
      </Container>
    </Card>
  );
};
