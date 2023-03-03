import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.section`
  position: relative;

  img {
    margin-bottom: 1rem;
    width: 100%;
    height: auto;
  }

  h2 {
    margin-bottom: 1rem;
    color: ${theme.colors.white};

    display: inline-block;
  }

  p {
    font-size: ${theme.size.fonts.body.m.size};
    line-height: ${theme.size.fonts.body.m.line_height};

    overflow: hidden;

    text-overflow: ellipsis;

    margin-bottom: 1rem;
  }
`;

export const Skills = styled.ul`
  li {
    list-style: none;
    padding: 2px 4px;
    display: inline-block;
    border-radius: 4px;
    margin: 2px;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;

export const Links = styled.div`
  margin-bottom: 2rem;

  a {
    all: unset;
    color: ${theme.colors.white};

    padding: 5px 10px;

    position: relative;

    font-weight: bold;
    font-size: ${theme.size.fonts.heading.s.size};

    cursor: pointer;
    z-index: 9;
    transition: 300ms;

    &:first-child {
      margin-right: 1rem;
    }

    &::before {
      content: "";
      height: 2px;
      width: 100%;
      background-color: ${theme.colors.primary};

      z-index: -1;

      position: absolute;
      bottom: 0px;
      left: 0;

      transition: 300ms;

      border-radius: ${theme.style.border_radius};
    }

    &:hover::before {
      height: 100%;
      background-color: ${theme.colors.primary};
    }


  }
`;
