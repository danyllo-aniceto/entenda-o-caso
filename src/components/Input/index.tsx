import { ChangeEvent } from 'react';
import { InputContainer, Label, TextArea, StyledInput } from './style';
import { IInputProps } from './types';
import { validateURL } from '../../utils/validateURL';

export function Input({
  label,
  asTextarea,
  rows = 14,
  cols,
  labelFontSize = '17.5px',
  labelFontWeight = '400',
  labelFontFamily = 'Inter, sans-serif;',
  isUrl = false,
  ...props
}: IInputProps) {
  const handleBlurInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (isUrl) {
      const { value } = event.target;
      const isValidURL = validateURL(value);

      if (value.length > 0 && !isValidURL) {
        alert('URL inválida');
      }
    }
  };

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
          onBlur={handleBlurInput}
        />
      ) : (
        <StyledInput
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          onBlur={handleBlurInput}
        />
      )}
    </InputContainer>
  );
}
