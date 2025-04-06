import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../i18n/locales/en/common.json';
import viTranslations from '../i18n/locales/vi/common.json';

// This configuration is not used with next-i18next
// The actual configuration is in next-i18next.config.js at the project root
// This file is kept for backward compatibility

const resources = {
  en: {
    translation: enTranslations
  },
  vi: {
    translation: viTranslations
  }
};

// Client-side only fallback for non-SSR context (should not be needed)
if (typeof window !== 'undefined' && !i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false
      }
    });
}

export default i18n;