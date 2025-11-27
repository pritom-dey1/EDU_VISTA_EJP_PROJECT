import FeaturesGrid from '@/Components/about/FeaturesGrid'
import HeroSection from '@/Components/about/HeroSection'
import MissionVision from '@/Components/about/MissionVision'
import StatsSection from '@/Components/about/StatsSection'
import TeamSection from '@/Components/about/TeamSection'
import React from 'react'

const page = () => {
  return (
    <div>
        <HeroSection></HeroSection>
        <MissionVision></MissionVision>
        <FeaturesGrid></FeaturesGrid>
        <TeamSection></TeamSection>
        <StatsSection></StatsSection>
    </div>
  )
}

export default page