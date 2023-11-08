import React from 'react'
import { useGlobalStyles } from '../../constants/Constants';
import { Hero } from '../hero/Hero';
import { Carte } from '../carte/Carte';

export const HomePage = () => {
  const globalClasses = useGlobalStyles();

  return (
    <main className={globalClasses.container}>
      <Hero />
      <Carte />
    </main>
  )
}
