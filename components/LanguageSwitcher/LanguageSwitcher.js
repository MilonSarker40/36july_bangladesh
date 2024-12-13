import React, { useState } from 'react';
import PropTypes from 'prop-types';
import en from '../../public/locales/en.json';
import bn from '../../public/locales/bn.json';

const LanguageSwitcher = ({ changeLanguage }) => {
  const [language, setLanguage] = useState('en'); // Default to English

  const texts = {
    en,
    bn
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    // changeLanguage(lang); // Call the prop function to update language in the parent component
  };

  return (
    <div>
      <div className='language__switcher'>
        <button onClick={() => handleLanguageChange('en')} className={language === 'en' ? 'active' : ''}>En</button>
        <button onClick={() => handleLanguageChange('bn')} className={language === 'bn' ? 'active' : ''}>বাং</button>
      </div>
    </div>
  );
};

LanguageSwitcher.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
};

export default LanguageSwitcher;