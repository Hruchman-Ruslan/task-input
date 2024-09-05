import Search from '/public/search-lg.svg';
import Help from '/public/help-icon.svg';
import ShortKey from './short-key';

export interface InputTextProps {
  type: string;
  id: string;
  placeholder: string;
}

export default function InputText({ type, id, placeholder }: InputTextProps) {
  return (
    <div className='rounded border border-[#D1D1D6] bg-[#FFF] px-3 py-2'>
      <div className='flex items-center gap-2 self-stretch'>
        <Search className='shrink-0 cursor-pointer' />
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className='w-full outline-none'
        />
        <Help className='shrink-0 cursor-pointer' />
        <ShortKey />
      </div>
    </div>
  );
}
