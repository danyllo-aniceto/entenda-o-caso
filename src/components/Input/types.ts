export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  asTextarea?: boolean;
  rows?: number;
  cols?: number;
  labelFontSize?: string;
  labelFontWeight?: string;
  labelFontFamily?: string;
}
