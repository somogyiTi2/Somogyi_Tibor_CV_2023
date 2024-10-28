import React from 'react'
import { Link } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import { useTranslation } from 'react-i18next';
import classes from './ErrorPage.module.css'

const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <MainNavigation />
      <div className={classes.error}>
        {t('errorPage')}
        <p>
          <Link to='/'>{t('back')}</Link>
          
        </p>
      </div>
    </>
  )
}

export default ErrorPage