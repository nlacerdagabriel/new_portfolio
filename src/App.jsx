import { HomePage } from "./pages/HomePage";
import { GlobalStyle } from "./styles/GlobalStyle";
import "react-toastify/dist/ReactToastify.css";

import global_br from "./translations/br/global.json";
import global_en from "./translations/en/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    br: {
      global: global_br,
    },
  },
});

export const App = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <GlobalStyle />
      <HomePage />
    </I18nextProvider>
  );
};
