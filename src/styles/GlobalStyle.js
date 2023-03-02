import { createGlobalStyle } from "styled-components";
import { theme } from "../theme";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
    html{
        scroll-behavior: smooth;
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }
    body{
        -webkit-font-smoothing: antialiased;
        
        background-position: center;
        background-color: ${theme.colors.secondary};

        color: ${theme.colors.text};
        font-family: 'Montserrat', sans-serif;

    }


    
    body, input, textarea, button{
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }
    button{
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    a{
        text-decoration: none;
    }

    .carousel *{
  text-align: left !important;
}

.carousel.carousel-slider{
    position: inherit;
}

.carousel.carousel-slider .control-arrow{
    background-color: ${theme.colors.secondary} !important;
    bottom: inherit;
    top: -5rem;

    box-shadow: ${theme.style.box_shadow};
    opacity: 1 !important;

    width: 30px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.style.border_radius};
}

.carousel .control-prev.control-arrow{
    right: 2rem;
    left: inherit;

}

.control-dots{
    display: none !important;
}
.carousel-status{
    background-color: ${theme.colors.secondary};

    padding: 0.5rem !important;
}

`;
