export interface InputTextProps {
  type: string;
  id: string;
  placeholder: string;
}

export default function InputText({ type, id, placeholder }: InputTextProps) {
  return <input type={type} id={id} placeholder={placeholder} />;
}
