import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.form`

  

  button {
    all: unset;

    border-radius: ${theme.style.border_radius};

    background-color: ${theme.colors.secondary};

    box-shadow: ${theme.style.box_shadow};

    height: 4rem;
    width: 100%;
    background-image: linear-gradient(145deg, #1e2024, #23272b);

    transition: 0.3s;

    text-transform: uppercase;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: ${theme.size.fonts.body.s.size};
    color: ${theme.colors.white};
    font-weight: 500;

    position: relative;

    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
    }
  }

  @media(max-width: 992px){
    margin-bottom: 2rem;
  }
`;
