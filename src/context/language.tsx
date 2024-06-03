import React from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
/** Mocks */
import { customTexts } from 'mocks/translations';
/** Interfaces & Types */
import type { Languages, LanguageContextProps, LanguageProviderProps } from 'utils/models/Language';

/**
 * @constant
 * LanguageContext
 * This context stores the state with the selected language.
 */
export const LanguageContext = React.createContext<LanguageContextProps | null>(null);

/**
 * @function
 * useLanguage
 * This hook returns the value of the language and the method that modifies the language that is stored.
 * @returns {LanguageContextProps | null}
 */
export const useLanguage = (): LanguageContextProps => {
  const context: LanguageContextProps | null =  React.useContext(LanguageContext);
  if (context) return context;
  else return {selectedLanguage: 'es', handleChangeSelectedLanguage: () => {}}
}

/** 
 * @component
 * LanguageProvider
 * This provider renders the states and function of the language.
 * @param {React.ReactNode<Element>} children
 * @returns {JSX.Element}
 */
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }): JSX.Element => {
  /** States */
  const [selectedLanguage, setSelectedLanguage] = React.useState<Languages>("en");

  /**
   * @function
   * This function modifies the selected language.
   * @returns {void}
   */
  const handleChangeSelectedLanguage = React.useCallback(() => setSelectedLanguage((prevState: Languages) => prevState === "es" ? "en" : "es"), [])

  const values = React.useMemo(() => ({
    selectedLanguage,
    handleChangeSelectedLanguage
  }), [selectedLanguage, handleChangeSelectedLanguage])

  React.useEffect(() => {
    i18n.use(initReactI18next).init({
      resources: customTexts,
      lng: selectedLanguage,
      fallbackLng: selectedLanguage,
      interpolation: {
        escapeValue: false,
      },
    });
  }, [selectedLanguage])

  return (
    <LanguageContext.Provider value={values}>
      {children}
    </LanguageContext.Provider>
  );
}