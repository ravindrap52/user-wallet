interface ExhangeList {
  name: string;
  unit: string;
  value: number;
  type: string;
}

interface ExchangeRates {
  rates: { [key: string]: ExhangeList };
}

interface ILocaleProperties {
  name: string;
  iso: string;
  isoCurrencyLocale: string;
  countryLocale: string
}

interface ILocale {
  [key: string]: ILocaleProperties;
}

interface walletForm {
  address: string;
}
