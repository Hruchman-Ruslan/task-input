export interface InputLabelProps {
  htmlFor: string;
  title: string;
}

export default function InputLabels({ htmlFor, title }: InputLabelProps) {
  return <label htmlFor={htmlFor}>{title}</label>;
}
