import { useTranslation } from "react-i18next";
import { Card } from "../../components/Card";
import { Container } from "./styles";

export const About = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <Card title={t("aboutMe.title")}>
      <Container>
        <p>
          {t("aboutMe.descriptionOne")}
        </p>

        <p>
        {t("aboutMe.descriptionTwo")}
        </p>
      </Container>
    </Card>
  );
};
