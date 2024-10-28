import React from 'react';
import classes from './PircturesData.module.css'
import { useTranslation } from 'react-i18next';


import Pictures from './Pictures'

const PituresData = () => {
  const images = [
    'https://raw.githubusercontent.com/somogyiTi2/CV/main/img/ps3.jpg',
    'https://raw.githubusercontent.com/somogyiTi2/CV/main/img/ps4.jpg',
    'https://raw.githubusercontent.com/somogyiTi2/CV/main/img/ps5.jpg',
    'https://raw.githubusercontent.com/somogyiTi2/CV/main/img/rajz1.jpg',
    'https://raw.githubusercontent.com/somogyiTi2/CV/main/img/rajz2.jpg',
    'https://raw.githubusercontent.com/somogyiTi2/CV/main/img/rajz3.jpg',
    'https://raw.githubusercontent.com/somogyiTi2/CV/main/img/rajz5.jpg',
  ]; // Képek tömbje

  const { t } = useTranslation();
  const prorgamingimg = t('References', { returnObjects: true }).map(data => data.img);

  return (
    <>
    <div className={classes.slideShow}>
      <h1>{t('programs')}</h1>
      <Pictures data={prorgamingimg} />
      </div>
    </>
  )
}

export default PituresData