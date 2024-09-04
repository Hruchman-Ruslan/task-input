export interface InputLabelProps {
  htmlFor: string;
  title: string;
}

export default function InputLabel({ htmlFor, title }: InputLabelProps) {
  return <label htmlFor={htmlFor}>{title}</label>;
}
