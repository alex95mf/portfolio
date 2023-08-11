import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import banderaEspanol from '../assets/icons/banderaespanol.webp'
import banderaIngles from '../assets/icons/banderaingles.webp'
import '../styles/languageSwitcher.css'

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const cambiarLenguaje = (language) => {
        i18n.changeLanguage(language);
        setIsDropdownOpen(false);
    };

    const languages = [
        {
            code: 'es',
            label: 'Español',
            flag: { banderaEspanol }
        },
        {
            code: 'en',
            label: 'English',
            flag: { banderaIngles }
        }
    ]

    const currentLanguage = languages.find((lang) => lang.code === i18n.language);
    const remainingLanguages = languages.filter((lang) => lang.code !== i18n.language);

    return (
        <div className="language-box">
            <button
                title={`${currentLanguage.code == 'es' ? 'Configurar lenguaje' : 'Configure language'}`}
                className="language-button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <img className='language-image' src={currentLanguage.code == 'es' ? banderaEspanol : banderaIngles} alt={currentLanguage.label} />
            </button>
            {isDropdownOpen && (
                <div className={`language-dropdown ${isDropdownOpen ? 'open' : ''}`}>
                    {remainingLanguages.map((lang) => (
                        <button
                            key={lang.code}
                            className="language-option"
                            onClick={() => cambiarLenguaje(lang.code)}
                        >
                            <img className='language-image' src={currentLanguage.code == 'es' ? banderaIngles : banderaEspanol} alt={currentLanguage.label} alt={lang.label} />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
