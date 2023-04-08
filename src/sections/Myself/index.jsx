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
          href="https://api.whatsapp.com/send?phone=5516988681880&text=Hello!%20I%20came%20from%20your%20portfolio%20and%20I%20want%20to%20hire%20you!"
          target="_blank"
        >
         {t("main.hireMe")}
        </a>
      </div>
    </Container>
  );
};
