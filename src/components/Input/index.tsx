import { InputContainer, Label, TextArea, StyledInput } from "./style";
import { IInputProps } from "./types";

export function Input({
  label,
  asTextarea,
  rows,
  cols,
  ...props
}: IInputProps) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      {asTextarea ? (
        <TextArea
          rows={rows}
          cols={cols}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <StyledInput
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </InputContainer>
  );
}
