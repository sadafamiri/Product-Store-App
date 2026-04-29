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
      search: "Search products...",
      loading: "Loading products...",
      error: "Something went wrong!",
      totalItems: "Total Items",
      totalPrice: "Total Price",
      qty: "Qty",
      remove: "Remove",
      emptyCart: "Cart is empty",
      theme: "Theme",
      language: "Language",
      layout: "Layout",
      darkMode: "Dark Mode",
      lightMode: "Light Mode",
    },

    fa: {
      title: "محصولات",
      addToCart: "افزودن به سبد",
      settings: "تنظیمات",
      cart: "سبد خرید",
      clearCart: "پاک کردن سبد",
      search: "جستجوی محصولات...",
      loading: "در حال بارگذاری...",
      error: "مشکلی پیش آمد!",
      totalItems: "تعداد کل",
      totalPrice: "قیمت کل",
      qty: "تعداد",
      remove: "حذف",
      emptyCart: "سبد خرید خالی است",
      theme: "تم",
      language: "زبان",
      layout: "چیدمان",
      darkMode: "حالت تاریک",
      lightMode: "حالت روشن",
    },

    ps: {
      title: "محصولات",
      addToCart: "سبد ته اضافه",
      settings: "تنظیمات",
      cart: "کراچۍ",
      clearCart: "پاکول",
      search: "محصولات ولټوئ...",
      loading: "بارگیری...",
      error: "تېروتنه رامنځته شوه!",
      totalItems: "ټول توکي",
      totalPrice: "ټول قیمت",
      qty: "شمېره",
      remove: "ړنګول",
      emptyCart: "کراچۍ خالي ده",
      theme: "بڼه",
      language: "ژبه",
      layout: "چینش",
      darkMode: "تیاره حالت",
      lightMode: "روښانه حالت",
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