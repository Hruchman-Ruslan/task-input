export interface InputGroupProps {
  children: React.ReactNode;
}

export default function InputGroup({ children }: InputGroupProps) {
  return <form>{children}</form>;
}
