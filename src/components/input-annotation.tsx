export interface InputAnnotationProps {
  children: React.ReactNode;
}

export default function InputAnnotation({ children }: InputAnnotationProps) {
  return <p className='text-[12px] font-normal leading-5'>{children}</p>;
}
