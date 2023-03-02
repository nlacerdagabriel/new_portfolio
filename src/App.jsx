import { HomePage } from "./pages/HomePage";
import { GlobalStyle } from "./styles/GlobalStyle";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <HomePage />
    </>
  );
};
