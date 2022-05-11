import React from 'react';
import Common from '../components/layout/common';
import HeroSection from '../components/main/mui/heroSection';
import CardContent from '../components/main/mui/cardContent';
import {heroData} from '../components/main/mui/utils/allHeroData'
import { Divider } from '@mui/material';
const ChecklistPage = () => {

  return (
    <Common>
        <HeroSection bg={heroData[0].background} heading={heroData[0].heading} content={heroData[0].content} image={heroData[0].image}/>
        <CardContent/>
        
    </Common>
  )
}

export default ChecklistPage