import styled from "styled-components";
import { theme } from "../../theme";
import Eu from '../../assets/eu.jpg'

export const Container = styled.section`
  width: 50%;
  margin-top: 7rem;

  position: relative;


  .image {
    height: 180px;
    width: 180px;

    border: 5px solid ${theme.colors.text};

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    background-image: url(${Eu});

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
      font-size: 3rem;
      line-height: ${theme.size.fonts.heading.xl.line_height};
    }

    @media(max-width: 480px){
      font-size: 2.7rem;

      p{
        font-size: 2.7rem;
      }
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

    a {
      all: unset;

      padding: 1rem 2rem;
      color: ${theme.colors.primary};

      font-size: ${theme.size.fonts.heading.m.size};
      font-weight: ${theme.size.fonts.heading.m.font_weight};

      cursor: pointer;

      background-color: ${theme.colors.secondary};
      box-shadow: ${theme.style.box_shadow};

      border-radius: ${theme.style.border_radius};

      transition: 300ms;

      &:hover {
      transform: translateY(-5px);
    }
    }

    button:first-child {
      margin-right: 1rem;
    }
  }

  @media(max-width: 992px){
        width: 100%;
        margin-top: 4rem;
    }
`;


export const Languages = styled.div`
  position: absolute;
  top: 0;
  right: 0;


  button{
    all: unset;
    padding: 0.5rem;
    background-color: ${theme.colors.dark};
    border-radius: ${theme.style.border_radius};
    box-shadow: ${theme.style.box_shadow};
    cursor: pointer;

    font-weight: bold;

    font-size: 0.9rem;

    &:first-child{
      margin-right: 1rem;
    }

  }
`