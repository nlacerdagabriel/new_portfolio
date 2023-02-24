import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.section`
    p{
            color: ${theme.colors.white};
            font-size: ${theme.size.fonts.body.s.size};
            line-height: ${theme.size.fonts.body.s.line_height};

            &:first-child{
                margin-bottom: 2rem;
            }
    }
`