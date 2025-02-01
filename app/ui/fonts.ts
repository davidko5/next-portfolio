import { Archivo_Black, DM_Sans } from 'next/font/google';

export const archivo_black = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
});

export const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});
