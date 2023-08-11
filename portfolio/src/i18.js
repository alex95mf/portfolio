import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa los archivos de traducción
import translationEN from './locales/en/translation.json'; // Archivo de traducción en inglés
import translationES from './locales/es/translation.json'; // Archivo de traducción en español

const resources = {
    en: {
        translation: translationEN,
    },
    es: {
        translation: translationES,
    },
};

i18n
    .use(initReactI18next) // Conectar react-i18next
    .init({
        resources,
        lng: 'en', // Idioma predeterminado
        fallbackLng: 'en', // Idioma de respaldo
        // debug: true,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
