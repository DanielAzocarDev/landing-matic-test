import React from 'react'
import { ArticlesSection } from '../../components/articlesSection/ArticlesSection'
import { Footer } from '../../components/footer/Footer'
import { HeroSection } from '../../components/heroSection/HeroSection'

export const Home = () => {
  return (
    <>
      <HeroSection />
      <ArticlesSection />
      <Footer />
    </>
  )
}
