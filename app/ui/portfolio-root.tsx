import { GeneralInformation } from '@/lib/types';

export function PortfolioRoot({
  generalInformation,
}: {
  generalInformation: GeneralInformation;
}) {
  return (
    <div>
      <div className='text-5xl text-accent'>{generalInformation.name}</div>
      <div>{generalInformation.position}</div>
      <div>{generalInformation.mainDetailsInfo}</div>
    </div>
  );
}
