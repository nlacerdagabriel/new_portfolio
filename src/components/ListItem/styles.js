import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.ul`

padding-left: 1.5rem;
    li{
        margin-bottom: 1rem;
        color: ${theme.colors.text};


        &:last-child{
            margin-bottom: 0;
        }

    }
`