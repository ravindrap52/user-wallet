import { locales } from "@/consts";
import { getTokenExchangeRate } from "./getTokenPrices";

export const getCurrentCryptoRate = async (
  currency: string
): Promise<number> => {
  const exchangeRate = await getTokenExchangeRate(currency);
  return exchangeRate;
};

/**
 * Based on the broswer language it will return the current locale object
 *
 * @param {currencyIso} currencyIso currencyIso in string format
 * @returns {ILocaleProperties} returns the locale object
 */
export const getCurrencyInfoByLanguageLocale = ({
  currencyIso,
}: {
  currencyIso: string;
}): ILocaleProperties => {
  let locale: ILocaleProperties = {
    name: "",
    iso: "",
    isoCurrencyLocale: "",
    countryLocale: "",
  };
  if (currencyIso in locales) {
    locale = locales[currencyIso];
  }
  return locale;
};

/**
 * This method will format the currency
 *
 * @param {value currencyLocale } value in number format currencyLocale in string format
 * @returns formatted currency
 */

export const formatCurrency = (
  value: number,
  currencyLocale: ILocaleProperties
) => {
  return new Intl.NumberFormat(currencyLocale.countryLocale, {
    style: "currency",
    currency: currencyLocale.isoCurrencyLocale,
  }).format(value);
};
