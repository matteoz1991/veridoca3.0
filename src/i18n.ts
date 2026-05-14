import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { TRANSLATIONS } from './translations';

const resources = {
  en: { translation: TRANSLATIONS.en },
  sv: { translation: TRANSLATIONS.sv },
  se: { translation: TRANSLATIONS.sv },
  // Map others to EN for now until I add them to the consolidated file
  de: { translation: TRANSLATIONS.en },
  es: { translation: TRANSLATIONS.en },
  fr: { translation: TRANSLATIONS.en },
  nl: { translation: TRANSLATIONS.en },
  uk: { translation: TRANSLATIONS.en },
  us: { translation: TRANSLATIONS.en },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['path', 'cookie', 'localStorage', 'navigator'],
      lookupPath: 'lang',
      lookupFromPathIndex: 0,
    },
  });

export default i18n;
