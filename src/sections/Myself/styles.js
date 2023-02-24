import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.section`
  width: 50%;
  margin-top: 7rem;


  .image {
    height: 180px;
    width: 180px;

    border: 5px solid ${theme.colors.text};

    margin-bottom: 2rem;

    border-radius: 999px;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: ${theme.size.fonts.heading.xl.size};
    line-height: ${theme.size.fonts.heading.xl.line_height};
    font-weight: ${theme.size.fonts.heading.xl.font_weight};

    color: ${theme.colors.white};

    span {
      color: ${theme.colors.primary};
    }

    p {
      font-size: 3.2rem;
      line-height: ${theme.size.fonts.heading.xl.line_height};
    }
  }

  & > p {
    font-size: ${theme.size.fonts.body.m.size};
    line-height: ${theme.size.fonts.body.m.line_height};

    margin-bottom: 4rem;
  }

  .buttons {
    display: flex;
    align-items: center;

    button {
      all: unset;

      padding: 1rem 2rem;
      color: ${theme.colors.primary};

      font-size: ${theme.size.fonts.heading.m.size};
      font-weight: ${theme.size.fonts.heading.m.font_weight};

      cursor: pointer;

      background-color: ${theme.colors.secondary};
      box-shadow: ${theme.style.box_shadow};

      border-radius: ${theme.style.border_radius};
    }

    button:first-child {
      margin-right: 1rem;
    }
  }
`;
