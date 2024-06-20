import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: 189px;
`;

export const Label = styled.label`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 17.5px;
  line-height: 26.25px;
  color: rgba(0, 0, 0, 1);
`;

const inputStyles = `
  margin-top: 10px;
  padding: 10.5px;
  border: 1px solid rgba(209, 213, 219, 1);
  border-radius: 6px;
  transition: border-color 0.3s;

  &:focus {
    border-color: orange;
    outline: none;
  }

   &::placeholder {
     font-family: "Gabarito", sans-serif;
     font-weight: 400;
     font-size: 14px;
     line-height: 16.8px;
  }
`;

export const StyledInput = styled.input`
  ${inputStyles}
`;

export const TextArea = styled.textarea`
  ${inputStyles}
`;
