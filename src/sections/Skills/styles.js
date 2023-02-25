import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;

  flex-wrap: wrap;

  & > div {
    height: 4rem;
    width: 4rem;

    margin: 3px;

    display: flex;

    align-items: center;
    justify-content: center;

    svg{
        width: 80%;
        height: 80%;

        
    }
  }
`;
