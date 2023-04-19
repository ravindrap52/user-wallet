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
  countryLocale: string;
}

interface ILocale {
  [key: string]: ILocaleProperties;
}

interface walletForm {
  address: string;
}

interface ITableHeaders {
  hexAddress: string;
  bech32Address: string;
  accountNumber: string;
}

interface IList {
  accounts: {
    "@type": string;
    base_account: { [key: string]: string };
    code_hash: string;
  }[];
}
