import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import LanguageDetector from "i18next-browser-languagedetector";

import './index.css';
import App from './App';


i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init(
    {
      supportedLngs: ['hu', 'en'],//itt fel kell sorolni, milyen nyelveket használok 
      fallbackLng: "hu",
      detection: {
        order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],//a cookie miatt felesleges lesz as lng sor mert beállít egy localStorage-et, hogy milyen nyelv legyen
        caches: ['cookie']// a cookie dönti el mi legyen
      },
      backend: {
        // loadPath: '/locales/{{lng}}/{{ns}}.json'
        loadPath: '/assets/locales/{{lng}}/translation.json'//hivatkozás a .json-be
      },
      react: {
        useSuspends: false
      }
    });

const loaingMarup = (
  <div className='py-4 text-center'>
    <h1>Loading....</h1>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={loaingMarup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);
