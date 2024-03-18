import React from 'react';
import { Container } from './container';

interface PricingTier {
  title: string;
  titleColor: string;
  subtitle: string;
  price: string;
  features: string[];
  buttonText: string;
  textColor: string;
  buttonColor?: string;
  backgroundColor?: string;
}

const PricingCard: React.FC<PricingTier> = ({
  title,
  titleColor,
  subtitle,
  price,
  features,
  buttonText,
  buttonColor = '',
  textColor,
  backgroundColor = '',
}) => {
  return (
    <div className={`flex flex-col justify-between p-6 rounded-lg shadow-md border border-gray-600 ${backgroundColor} text-white h-full`}>
      <div>
        <h3 className={`text-base font-medium leading-7 mb-4 ${titleColor}`}>{title}</h3>
        <span className="text-gray-400 text-[12px] block h-6">{subtitle}</span>
        <p className="text-gray-900 text-4xl font-bold tracking-tight dark:text-white mb-10">{price}</p>
        <ul className="mb-8 text-[13px]">
          {features.map((feature, index) => (
            <li key={index} className="flex items-top mb-4">
              <img src="/img/check.png" className="h-4 w-4 mr-2 mt-0.5" alt="Check" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`w-full py-3 rounded-lg font-semibold border border-emerald-600 ${buttonColor} text-[12px] ${textColor} hover:opacity-90 transition-opacity mt-auto`}>
        {buttonText}
      </button>
    </div>
  );
};

export const Tabelle: React.FC = () => {

  const pricingTiers: PricingTier[] = [
    {
      title: 'Evaluation',
      titleColor: 'text-white',
      subtitle: '',
      price: 'Free',
      features: [
        'A growing library of awesome components',
        'React / Next.js / Tailwind CSS code',
        'Serves a wide variety of audience.',
        'MIT Licence. Personal or commercial projects.',
        'Contact over chat for support',
      ],
      buttonText: 'Browse Components',
      textColor: 'text-emerald-600',
      backgroundColor: '',
    },
    {
      title: 'Custom Components',
      titleColor: 'text-emerald-600',
      subtitle: 'pause or cancel anytime',
      price: '$1999/mo',
      features: [
        'One component at a time',
        'React / Next.js / Tailwind CSS code',
        'Design + Development',
        'Unlimited Revisions',
        '24-hour support response time',
        'Private communication channel',
        '1-3 days turnaround time',
        'Pause or cancel anytime',
      ],
      buttonText: 'Buy Now',
      textColor: 'text-emerald-600',
      buttonColor: 'bg-emerald-600',
      backgroundColor: '',
    },
    {
        title: 'Custom Components',
        titleColor: 'text-emerald-600',
        subtitle: 'pause or cancel anytime',
        price: '$4999/mo',
        features: [
          'One component at a time',
          'React / Next.js / Tailwind CSS code',
          'Design + Development',
          'Unlimited Revisions',
          '24-hour support response time',
          'Private communication channel',
          '1-3 days turnaround time',
          'Pause or cancel anytime',
        ],
        buttonText: 'Buy Now',
        textColor: 'text-emerald-600',
        buttonColor: 'bg-emerald-600',
        backgroundColor: '',
      },
      {
        title: 'Custom Components',
        titleColor: 'text-emerald-600',
        subtitle: 'pause or cancel anytime',
        price: '$9999/mo',
        features: [
          'One component at a time',
          'React / Next.js / Tailwind CSS code',
          'Design + Development',
          'Unlimited Revisions',
          '24-hour support response time',
          'Private communication channel',
          '1-3 days turnaround time',
          'Pause or cancel anytime',
        ],
        buttonText: 'Buy Now',
        textColor: 'text-emerald-600',
        buttonColor: 'bg-grey',
        backgroundColor: 'bg-grey',
      },
  ];

  return (
    <Container>
    <div className="pt-16 pb-16">
         <h1 className="text-gradient mb-4 text-2xl text-center font-semibold md:mb-7 md:text-6xl">
         Need custom components or online shop? 
         <br />We've got you covered
         </h1>
         <p className="mb-12 max-w-[68rem]justify-center text-center text-lg text-grey-dark md:ml-4 md:mb-7 md:text-xl">
         From custom components to complete website tailored to your
         <br /> needs. Simple pricing, no hidden fees.
          </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pricingTiers.map((tier, index) => (
          <PricingCard key={index} {...tier} />
        ))}
      </div>
    </div>
    </Container>
  );
};
