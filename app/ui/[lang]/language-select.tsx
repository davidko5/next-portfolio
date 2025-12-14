'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { redirect } from 'next/navigation';

export const LanguageSelect = ({ lang }: { lang: string }) => {
  const handleLanguageChange = async (lang: string) => {
    redirect(`/${lang}`);
  };

  return (
    <Select onValueChange={handleLanguageChange} value={lang}>
      <SelectTrigger className='w-[224px] border-0 mt-[3px] mr-[4px] bg-transparent text-white hover:text-accent data-[state=open]:text-accent font-medium uppercase justify-end underline underline-offset-[3px]'>
        <SelectValue placeholder='Select language' />
      </SelectTrigger>
      <SelectContent className='mr-[-8px] border-0 bg-transparent'>
        <SelectGroup>
          <SelectItem value='en'>English</SelectItem>
          <SelectItem value='pl'>Polski</SelectItem>
          <SelectItem value='ua'>Українська</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
