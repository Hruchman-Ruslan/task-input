export interface ShortKeyProps {}

export default function ShortKey({}: ShortKeyProps) {
  return (
    <span className='flex h-[20px] shrink-0 cursor-pointer flex-col items-center justify-center gap-[10px] rounded-[4px] border border-[#E4E4E7] px-[6px] py-0 text-[12px] font-normal leading-[20px] text-[#70707B]'>
      ⌘K
    </span>
  );
}
