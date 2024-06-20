import { InputContainer, Label, TextArea, StyledInput } from "./style";
import { IInputProps } from "./types";

export function Input({
  label,
  asTextarea,
  rows,
  cols,
  labelFontSize = "17.5px",
  labelFontWeight = "400",
  labelFontFamily = "Inter, sans-serif;",
  ...props
}: IInputProps) {
  return (
    <InputContainer>
      <Label
        fontSize={labelFontSize}
        fontWeight={labelFontWeight}
        fontFamily={labelFontFamily}
      >
        {label}
      </Label>
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
