import React, { useState } from "react";
import MensajeEnglish from "./../language/en.json";
import MensajeVietNamese from "./../language/vi.json";
import { IntlProvider } from "react-intl";

const langContext = React.createContext();

const LangProvider = ({ children }) => {
  let localePorDefecto;
  let mensajesPorDefecto;
  const lang = localStorage.getItem("lang");

  if (lang) {
    localePorDefecto = lang;

    if (lang === "vi-VN") {
      mensajesPorDefecto = MensajeVietNamese;
    } else if (lang === "en-US") {
      mensajesPorDefecto = MensajeEnglish;
    } else {
      localePorDefecto = "en-US";
      mensajesPorDefecto = MensajeEnglish;
    }
  }

  const [mensaje, setMensaje] = useState(mensajesPorDefecto);
  const [locale, setLocale] = useState(localePorDefecto);

  const selectLanguage = (language) => {
    switch (language) {
      case "vi-VN":
        setMensaje(MensajeVietNamese);
        setLocale("vi-VN");
        localStorage.setItem("lang", "vi-VN");
        break;
      case "en-US":
        setMensaje(MensajeEnglish);
        setLocale("en-US");
        localStorage.setItem("lang", "en-US");
        break;
      default:
        setMensaje(MensajeEnglish);
        setLocale("en-US");
        localStorage.setItem("lang", "en-US");
    }
  };
  return (
    <langContext.Provider value={{ selectLanguage: selectLanguage }}>
      <IntlProvider locale={locale} messages={mensaje}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};

export { LangProvider, langContext };
