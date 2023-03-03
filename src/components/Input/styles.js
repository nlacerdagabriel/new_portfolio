import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  margin-bottom: 1.5rem;

  span{
    font-size: 14px;
    color: ${theme.colors.primary};
  }


  input,
  textarea {
    width: 100%;
    border-radius: 0.5rem;
    background-color: #191b1e;

    margin-top: 0.7rem;
    outline: none;

    border: none;

    box-shadow: ${theme.style.inner_shadow};

    &:focus {
      border: 2px solid ${theme.colors.primary};
    }
  }

  textarea {
    height: 150px;
    
  color: ${theme.colors.white};
  padding: 1rem;
  font-size: 1rem;

  resize: none;
    
  }


`;

export const InputS = styled.input`
  display: flex;
  flex-direction: column;

  height: 3rem;

  color: ${theme.colors.white};
  padding-left: 1rem;

  width: ${(props) => (props.width ? props.width : "100%")};




`;


