import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);

    const dir = language === "fa" || language === "ps" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const translations = {
    en: {
      // Home
      title: "Products",
      searchPlaceholder: "Search products...",
      sort: "Sort",
      default: "Default",
      low: "Low Price",
      high: "High Price",
      all: "All",
      addToCart: "Add to Cart",
      details: "Details",

      // Cart
      cart: "Cart",
      clearCart: "Clear Cart",
      totalItems: "Total Items",
      totalPrice: "Total Price",
      qty: "Qty",
      remove: "Remove",
      emptyCart: "Cart is empty",

      // Settings
      settings: "Settings",
      theme: "Theme",
      language: "Language",
      layout: "Layout",
      english: "English",
      persian: "Persian",
      pashto: "Pashto",
      darkMode: "Dark Mode",
      lightMode: "Light Mode",

      // System
      loading: "Loading products...",
      error: "Something went wrong!",
      back: "Back",
      home: "Home",
    },

    fa: {
      title: "محصولات",
      searchPlaceholder: "جستجوی محصولات...",
      sort: "مرتب‌سازی",
      default: "پیش‌فرض",
      low: "ارزان‌ترین",
      high: "گران‌ترین",
      all: "همه",
      addToCart: "افزودن به سبد",
      details: "جزئیات",

      cart: "سبد خرید",
      clearCart: "پاک کردن سبد",
      totalItems: "تعداد کل",
      totalPrice: "قیمت کل",
      qty: "تعداد",
      remove: "حذف",
      emptyCart: "سبد خرید خالی است",

      settings: "تنظیمات",
      theme: "تم",
      language: "زبان",
      layout: "چیدمان",
      english: "انگلیسی",
      persian: "فارسی",
      pashto: "پشتو",
      darkMode: "حالت تاریک",
      lightMode: "حالت روشن",

      loading: "در حال بارگذاری...",
      error: "مشکلی پیش آمد!",
      back: "بازگشت",
      home: "خانه",
    },

    ps: {
      title: "محصولات",
      searchPlaceholder: "د محصولاتو لټون...",
      sort: "ترتیب",
      default: "معیاري",
      low: "ارزانه",
      high: "ګرانه",
      all: "ټول",
      addToCart: "سبد ته اضافه",
      details: "جزیات",

      cart: "کراچۍ",
      clearCart: "پاکول",
      totalItems: "ټول توکي",
      totalPrice: "ټول قیمت",
      qty: "شمېره",
      remove: "ړنګول",
      emptyCart: "کراچۍ خالي ده",

      settings: "تنظیمات",
      theme: "بڼه",
      language: "ژبه",
      layout: "چینش",
      english: "انګلیسي",
      persian: "فارسي",
      pashto: "پښتو",
      darkMode: "تیاره حالت",
      lightMode: "روښانه حالت",

      loading: "بارگیری...",
      error: "تېروتنه!",
      back: "شاته",
      home: "کور",
    },
  };

  const t = (key) => translations[language]?.[key] || key;

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
