import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.form`
  input,
  textarea {
    width: 100%;
    border-radius:0.5rem;
    background-color: #191b1e;
    outline: none;

    margin-bottom: 1.5rem;


    border: none;

    box-shadow: ${theme.style.inner_shadow};

    &:focus {
      border: 2px solid ${theme.colors.primary};
    }
  }

  input {
    height: 3rem;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      width: 50%;

      &:first-child {
        margin-right: 2rem;
      }
    }
  }

  textarea {
    height: 150px;
  }

  button {
    all: unset;

    border-radius: ${theme.style.border_radius};

    background-color: ${theme.colors.secondary};

    box-shadow: ${theme.style.box_shadow};

    height: 2.5rem;
    width: 100%;
  }
`;
