export interface InputGroupProps {
  children: React.ReactNode;
}

export default function InputGroup({ children }: InputGroupProps) {
  return <form className='m-auto'>{children}</form>;
}
