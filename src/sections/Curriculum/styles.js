import styled from "styled-components";

export const Container = styled.section`
    width: 50%;

    padding: 3rem 1rem;

    max-height: 100vh;
    overflow: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    margin-left: 3rem;


    & > div:last-child{
        margin-bottom: 0;
    }


    @media(max-width: 992px){
        width: 100%;
        height: initial;
        overflow: initial;

        margin-left: 0;
    }
`