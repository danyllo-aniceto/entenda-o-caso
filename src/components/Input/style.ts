import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Label = styled.label<{
  fontSize: string;
  fontWeight: string;
  fontFamily: string;
}>`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: 26.25px;
  color: rgba(0, 0, 0, 1);

  @media (max-width: 420px) {
    font-size: 12px;
  }
`;

const inputStyles = `
  margin-top: 10px;
  padding: 10.5px;
  border: 1px solid rgba(209, 213, 219, 1);
  border-radius: 6px;
  transition: border-color 0.3s;

  &:focus {
    border-color: 
#fc4a04;
    outline: none;
  }

   &::placeholder {
     font-family: "Gabarito", sans-serif;
     font-weight: 400;
     font-size: 14px;
     line-height: 16.8px;

     @media (max-width: 420px) {
      font-size: 12px;
    }
  }

  
`;

export const StyledInput = styled.input`
  ${inputStyles}
`;

export const TextArea = styled.textarea`
  ${inputStyles}
  resize: none;
`;
