import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.section`
    display: flex;

    max-width: ${theme.size.container.xl};

    margin: 0 auto;

    padding: 0 2rem;

    @media(max-width: 992px){
        flex-direction: column;
    }
`