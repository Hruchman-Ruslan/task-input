export interface ShortKeyProps {}

export default function ShortKey({}: ShortKeyProps) {
  return (
    <span className='absolute right-3 flex h-[20px] cursor-pointer flex-col items-center justify-center gap-[10px] rounded-[4px] border border-[#E4E4E7] px-[6px] py-0 text-[12px] font-normal leading-[20px] text-[#70707B]'>
      ⌘K
    </span>
  );
}
