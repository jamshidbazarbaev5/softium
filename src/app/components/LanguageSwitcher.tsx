'use client'
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="header-navbar-other-lang">
      <div className="options-dropdown" id="dropdown">
        <button 
          onClick={() => setLanguage('ru')}
          className={language === 'ru' ? 'active' : ''}
        >
          RU
        </button>
        <button 
          onClick={() => setLanguage('en')}
          className={language === 'en' ? 'active' : ''}
        >
          EN
        </button>
      </div>
    </div>
  );
} 