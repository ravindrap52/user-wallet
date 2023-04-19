"use client"
export const locales = {
  "de-DE": {
    name: "Euro",
    iso: "eur",
    isoCurrencyLocale: "EUR",
    countryLocale: "de-DE"
  },
  "en-US": {
    name: "US Dollar",
    iso: "usd",
    isoCurrencyLocale: "USD",
    countryLocale: "en-US"
  },
} as ILocale;

export const API_FOR_EXCHANGE_RATES="https://api.coingecko.com/api/v3/exchange_rates";

export const tableHeaders = {
  hexAddress: 'Hex Address',
  bech32Address: 'Bech32 Address',
  accountNumber: 'Account Number'
} as ITableHeaders

export const defaultCurrencyIso = 'en-US';