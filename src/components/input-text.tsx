import Search from '/public/search-lg.svg';
import Help from '/public/help-icon.svg';
import ShortKey from './shortkey';

export interface InputTextProps {
  type: string;
  id: string;
  placeholder: string;
}

export default function InputText({ type, id, placeholder }: InputTextProps) {
  return (
    <div className='relative flex items-center'>
      <Search className='absolute left-3 cursor-pointer' />
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className='w-[323px] truncate rounded-[var(--radius-xs,4px)] border border-[var(--Colors-Border-border-primary,#D1D1D6)] bg-[var(--Colors-Background-bg-primary,#FFF)] px-3 py-2 pl-9 text-[12px] font-normal leading-[20px] text-[var(--colors-text-text-primary-900,#1A1A1E)]'
      />
      <Help className='absolute right-[52px] cursor-pointer' />
      <ShortKey />
    </div>
  );
}
