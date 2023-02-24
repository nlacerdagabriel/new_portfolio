import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;

  & > div {
    height: 4rem;
    width: 4rem;

    margin-bottom: 0.5rem;

    display: flex;

    align-items: center;
    justify-content: center;

    svg{
        width: 80%;
        height: 80%;
    }
  }
`;
