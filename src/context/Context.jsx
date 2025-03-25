import React, { useState } from "react";
import EnglishMessages from "./../language/en.json";
import VietnameseMessages from "./../language/vi.json";
import { IntlProvider } from "react-intl";

const langContext = React.createContext();

const LangProvider = ({ children }) => {
  let defaultLocale;
  let defaultMessages;
  const lang = localStorage.getItem("lang");

  if (lang) {
    defaultLocale = lang;

    if (lang === "vi-VN") {
      defaultMessages = VietnameseMessages;
    } else if (lang === "en-US") {
      defaultMessages = EnglishMessages;
    } else {
      defaultLocale = "en-US";
      defaultMessages = EnglishMessages;
    }
  }

  const [messages, setmessages] = useState(defaultMessages);
  const [locale, setLocale] = useState(defaultLocale);

  const selectLanguage = (language) => {
    switch (language) {
      case "vi-VN":
        setmessages(VietnameseMessages);
        setLocale("vi-VN");
        localStorage.setItem("lang", "vi-VN");
        break;
      case "en-US":
        setmessages(EnglishMessages);
        setLocale("en-US");
        localStorage.setItem("lang", "en-US");
        break;
      default:
        setmessages(EnglishMessages);
        setLocale("en-US");
        localStorage.setItem("lang", "en-US");
    }
  };
  return (
    <langContext.Provider value={{ selectLanguage: selectLanguage }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};

export { LangProvider, langContext };
