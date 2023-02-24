import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.section`

img{
    width: 100%;
    margin-bottom: 1rem;
}

h2{
    margin-bottom: 1rem;
    color: ${theme.colors.white};
    border-bottom: 2px solid ${theme.colors.primary};

    display: inline-block;
}

p{
    font-size: ${theme.size.fonts.body.m.size};
    line-height:${theme.size.fonts.body.m.line_height} ;
}
    
`