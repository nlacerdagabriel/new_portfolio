import { Container } from "./styles";
import { Card } from "../../components/Card";

import { toast, ToastContainer } from "react-toastify";
import { useForm, Controller } from "react-hook-form";

import emailjs from "@emailjs/browser";
import { Input } from "../../components/Input";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const [t, i18n] = useTranslation("global");


  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const rules = {
    name: {
      required: t("contactMe.rules.isRequired"),
      minLength: {
        value: 3,
        message: t("contactMe.rules.minLength"),
      },
      maxLength: {
        value: 30,
        message: t("contactMe.rules.maxLength.30"),
      },
    },
    subject: {
      required: t("contactMe.rules.isRequired"),
      minLength: {
        value: 3,
        message: t("contactMe.rules.minLength"),
      },
      maxLength: {
        value: 30,
        message: t("contactMe.rules.maxLength.30"),
      },
    },
    message: {
      required: t("contactMe.rules.isRequired"),
      minLength: {
        value: 3,
        message: t("contactMe.rules.minLength"),
      },
      maxLength: {
        value: 300,
        message: t("contactMe.rules.maxLength.300"),
      },
    },
    email: {
      required: t("contactMe.rules.isRequired"),
      pattern: {
        value: /^\S+@\S+\.\S+$/,
        message:t("contactMe.rules.email"),
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
        toast.success(t("toastMessages.email.success"));
        reset();
      })
      .catch(() => {
        toast.error(t("toastMessages.email.error"));
      });
  };

  return (
    <>
      <ToastContainer />

      <Card title={t("contactMe.title")}>
        <Container onSubmit={handleSubmit(sendEmail)}>
          <Input
            label={t("contactMe.inputs.name")}
            name="name"
            register={register}
            rules={rules.name}
          >
            {errors.name && <span>{errors.name.message}</span>}
          </Input>
          <Input
            label={t("contactMe.inputs.email")}
            name="email"
            register={register}
            rules={rules.email}
          >
            {errors.email && <span>{errors.email.message}</span>}
          </Input>
          <Input
            label={t("contactMe.inputs.subject")}
            name="subject"
            register={register}
            rules={rules.subject}
          >
            {errors.subject && <span>{errors.subject.message}</span>}
          </Input>
          <Input
            isTextarea
            label={t("contactMe.inputs.message")}
            name="message"
            register={register}
            rules={rules.message}
          >
            {errors.message && <span>{errors.message.message}</span>}
          </Input>

          <button type="submit">{t("contactMe.button")}</button>
        </Container>
      </Card>
    </>
  );
};
