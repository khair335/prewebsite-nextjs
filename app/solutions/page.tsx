import React from 'react';
import { Container } from '@/components/container';
import { HeroSolutions } from '@/components/heroSolutions';
import { PromotionDataEngine } from '@/components/promotionDataEngine';
import { TextImage1 } from '@/components/textImage1';
import { TextImage2 } from '@/components/textImage2';
import { TextImage3 } from '@/components/textImage3';
import { TextImage4 } from '@/components/textImage4';
import { Foundation } from '@/components/foundation';


export default function Solutions() {
    return (
      <>
        <HeroSolutions />
        <PromotionDataEngine />
        <TextImage1 />
        <TextImage2 />
        <TextImage3 />
        <TextImage4 />
        <Foundation />
      </>
    );
  }