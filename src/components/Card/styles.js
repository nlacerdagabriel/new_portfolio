import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  background-color: ${theme.colors.secondary};

  box-shadow: ${theme.style.box_shadow};

  border-radius: ${theme.style.border_radius};

  width: 100%;

  padding: ${(props) => (props.padding ? props.padding : "2rem")};

  margin-bottom: ${(props) => (props.mb ? props.mb : "2rem")};

  h1 {
    font-size: ${theme.size.fonts.heading.l.size};
    font-weight: ${theme.size.fonts.heading.l.font_weight};

    padding-bottom: 1.5rem;

    border-bottom: 1px solid #000;

    margin-bottom: 1.5rem;

    color: ${theme.colors.white};
  }
`;
