import React from 'react';
import { Clients } from "@/components/clients";
import { Hero } from "@/components/hero";
import { Tests } from '@/components/tests';
import { HeroSolutions } from '@/components/heroSolutions';
import { PromotionDataEngine } from '@/components/promotionDataEngine';
import { Started } from '@/components/started';
import { Fixedslider } from '@/components/fixedslider';
import { Infosection } from '@/components/infosection';
import { Beforeafter } from '@/components/beforeafter';
import Accordion from '@/components/Accordion';
import Markter from '@/components/markter';


export default function Home() {
  return (
    <>
    <div className='dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2]'>
      <Hero />
      <Clients />
      </div>
      <Tests />
      <Fixedslider />
      <Infosection />
      <HeroSolutions />
      <PromotionDataEngine />
      {/* <Beforeafter /> */}
      <Accordion />
      <Started />
      <Markter/>
    </>
  );
}