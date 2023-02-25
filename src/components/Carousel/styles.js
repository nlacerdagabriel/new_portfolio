import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.section`
  height: 100%;
  position: relative;

  & > .buttons {
    position: absolute;
    top: -5.5rem;
    right: 0;

    display: flex;

    button {
      all: unset;
      cursor: pointer;
      background-color: ${theme.colors.secondary};

      border-radius: ${theme.style.border_radius};

      height: 2.5rem;
      width: 2.5rem;

      display: flex;
      align-items: center;
      justify-content: center;

      box-shadow: ${theme.style.box_shadow};

      &:first-child {
        margin-right: 1rem;
      }

      &:hover {
        svg {
          color: ${theme.colors.primary};
          opacity: 0.5;
        }
      }

      &:active {
        svg {
          opacity: 1;
        }
      }

      svg {
        transition: 0.3s;
        height: 0.9rem;
        width: 0.9rem;
        color: ${theme.colors.white};
      }
    }
  }
`;
