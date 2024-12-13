import React, { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

const ParentComponent = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  return (
    <div>
      <LanguageSwitcher changeLanguage={changeLanguage} />
    </div>
  );
};

export default ParentComponent;