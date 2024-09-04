import Info from '/public/info-circle.svg';

export interface InputLabelProps {
  htmlFor: string;
  title: string;
}

export default function InputLabels({ htmlFor, title }: InputLabelProps) {
  return (
    <div className='flex items-center gap-1'>
      <label className='text-xs font-medium leading-5' htmlFor={htmlFor}>
        {title}
      </label>
      <Info className='cursor-pointer' />
    </div>
  );
}
