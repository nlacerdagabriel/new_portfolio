import { useTranslation } from "react-i18next";
import { Container, Languages } from "./styles";

export const Myself = () => {
  const [t, i18n] = useTranslation("global");
  const string = t("main.title");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Container>
      <div className="image"></div>

      <h1 dangerouslySetInnerHTML={{ __html: string }}></h1>

      <Languages>
        <button onClick={() => handleChangeLanguage("en")}>EN</button>
        <button onClick={() => handleChangeLanguage("br")}>BR</button>
      </Languages>

      <p>
        {t("main.description")}
      </p>

      <div className="buttons">
        <a
          style={{ marginRight: "2rem" }}
          href="https://www.linkedin.com/in/gabriel-lacerda-a46a48217/"
          target="_blank"
        >
          Linkedin
        </a>
        <a
          href={t("main.wppMessage")}
          target="_blank"
        >
         {t("main.hireMe")}
        </a>
      </div>
    </Container>
  );
};
