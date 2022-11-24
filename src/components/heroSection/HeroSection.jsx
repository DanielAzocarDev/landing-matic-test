import React from 'react'
import { Button } from '../button/Button'
import mockup from '../../assets/image-mockups.png'
import bgHero from '../../assets/bg-hero.png'

import './HeroSection.scss'
import { Subsection } from '../subsection/Subsection'

export const HeroSection = () => {
  return (
    <>
      <section className='hero'>

        <img className='hero__mockup' src={mockup} alt="" />

        <div className='hero__container'>
          <div className='hero__description'>
            <h1 className='hero__title'>Next generation<br />digital banking</h1>
            <p className='hero__text'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving. budgeting, nvesting, and much more.</p>
            <Button>Request Invite</Button>
          </div>
        </div>
      </section>
      <Subsection />
    </>
  )
}