import { locales } from "@/consts";

export const getCurrencyInfoByLanguageLocale = (key: string): ILocaleProperties => {
  let locale: ILocaleProperties = {
      name: "",
      iso: "",
      isoCurrencyLocale: ""
  };
  if (key in locales) {
    locale = locales[key];
  }
  return locale;
};
