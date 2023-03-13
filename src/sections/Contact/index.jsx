import { Container } from "./styles";
import { Card } from "../../components/Card";

import { toast, ToastContainer } from "react-toastify";
import { useForm, Controller } from "react-hook-form";

import emailjs from "@emailjs/browser";
import { Input } from "../../components/Input";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const rules = {
    name: {
      required: "This field is required",
      minLength: {
        value: 3,
        message: "This field must contain at least 3 characters.",
      },
      maxLength: {
        value: 30,
        message: "This field must contain a maximum of 30 characters.",
      },
    },
    subject: {
      required: "This field is required",
      minLength: {
        value: 3,
        message: "This field must contain at least 3 characters.",
      },
      maxLength: {
        value: 30,
        message: "This field must contain a maximum of 30 characters.",
      },
    },
    message: {
      required: "This field is required",
      minLength: {
        value: 3,
        message: "This field must contain at least 3 characters.",
      },
      maxLength: {
        value: 30,
        message: "This field must contain a maximum of 300 characters.",
      },
    },
    email: {
      required: "This field is required",
      pattern: {
        value: /^\S+@\S+\.\S+$/,
        message: "Please enter a valid email address.",
      },
    },
  };

  const sendEmail = (data) => {
    const { name, email, message, subject } = data;

    emailjs
      .send(
        "service_3b8o28v",
        "template_vaguavf",
        {
          name,
          email,
          message,
          subject,
        },
        "w5f6bppgJw_vJ6-gc"
      )
      .then(() => {
        toast.success("Email successfully sent!");
        reset();
      })
      .catch(() => {
        toast.error("Error, try again.");
      });
  };

  return (
    <>
      <ToastContainer />

      <Card title="Contact with me">
        <Container onSubmit={handleSubmit(sendEmail)}>
          <Input
            label="Name"
            name="name"
            register={register}
            rules={rules.name}
          >
            {errors.name && <span>{errors.name.message}</span>}
          </Input>
          <Input
            label="Email"
            name="email"
            register={register}
            rules={rules.email}
          >
            {errors.email && <span>{errors.email.message}</span>}
          </Input>
          <Input
            label="Subject"
            name="subject"
            register={register}
            rules={rules.subject}
          >
            {errors.subject && <span>{errors.subject.message}</span>}
          </Input>
          <Input
            isTextarea
            label="Message"
            name="message"
            register={register}
            rules={rules.message}
          >
            {errors.message && <span>{errors.message.message}</span>}
          </Input>

          <button type="submit">Send message</button>
        </Container>
      </Card>
    </>
  );
};
