export interface InputGroupProps {
  children: React.ReactNode;
}

export default function InputGroup({ children }: InputGroupProps) {
  return <form className='m-auto flex flex-col gap-1'>{children}</form>;
}
