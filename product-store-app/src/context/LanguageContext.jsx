import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);

    // RTL / LTR
    const dir = language === "fa" || language === "ps" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = (key) => {
    return translations[language]?.[key] || key;
  };

  const translations = {
    en: {
      title: "Products",
      addToCart: "Add to Cart",
      settings: "Settings",
      cart: "Cart",
      clearCart: "Clear Cart",
    },

    fa: {
      title: "محصولات",
      addToCart: "افزودن به سبد",
      settings: "تنظیمات",
      cart: "سبد خرید",
      clearCart: "پاک کردن سبد",
    },

    ps: {
      title: "محصولات (پښتو)",
      addToCart: "سبد ته اضافه",
      settings: "تنظیمات",
      cart: "کراچۍ",
      clearCart: "پاکول",
    },
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}