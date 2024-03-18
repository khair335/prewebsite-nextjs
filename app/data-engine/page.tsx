import React from 'react';
import { HeroDataEngine } from '@/components/heroDataEngine';
import { PromotionDataEngine } from '@/components/promotionDataEngine';
import { Tests } from '@/components/tests';
import { Control } from '@/components/control';

export default function DataEngine() {
    return (
      <>
        <HeroDataEngine />
        <PromotionDataEngine />
        <Tests />
        <Control />
      </>
    );
  }