export interface InputAnnotationProps {
  children: React.ReactNode;
}

export default function InputAnnotation({ children }: InputAnnotationProps) {
  return <p>{children}</p>;
}
