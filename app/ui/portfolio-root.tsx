import { GeneralInformation } from '@/lib/types';
import { archivo_black } from './fonts';

export function PortfolioRoot({
  generalInformation,
}: {
  generalInformation: GeneralInformation;
}) {
  return (
    <div>
      <div className={`${archivo_black.className} text-5xl text-accent`}>
        {generalInformation.name}
      </div>
      <div className='text-primary text-2xl font-light'>{generalInformation.position}</div>
      <div>{generalInformation.mainDetailsInfo}</div>
    </div>
  );
}
