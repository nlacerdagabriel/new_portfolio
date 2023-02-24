import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.form`
  input,
  textarea {
    width: 100%;
    border-radius: 0.5rem;
    background-color: #191b1e;
    outline: none;

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
  }

  textarea {
    height: 150px;
  }

  button {
    all: unset;

    border-radius: ${theme.style.border_radius};

    background-color: ${theme.colors.secondary};

    box-shadow: ${theme.style.box_shadow};

    height: 4rem;
    width: 100%;
    background-image: linear-gradient(145deg, #1e2024, #23272b);


    text-transform: uppercase;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: ${theme.size.fonts.body.s.size};
    color: ${theme.colors.white};
    font-weight: 500;
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;

  width: ${(props) => (props.width ? props.width : "100%")};

    margin-bottom: 1.5rem;

  &:first-child {
      margin-right: 2rem;
    }

    & > label{
      margin-bottom: 1rem;
      width: 100%;
    }

  & > input {
    width: 100%;
  }
`;
