import {
  getCurrencyInfoByLanguageLocale,
  formatCurrency,
} from "@/helpers/currencyHelper";

const localeObj = {
  name: "US Dollar",
  iso: "usd",
  isoCurrencyLocale: "USD",
  countryLocale: "en-US",
};

describe("currency helpers", () => {
  it("should return currency info based on locale", () => {
    expect(getCurrencyInfoByLanguageLocale({ currencyIso: "en-US" })).toEqual(
      localeObj
    );
  });
  it("should format the currency based on country and currency locale", () => {
    expect(formatCurrency(100, localeObj)).toBe("$100.00");
  });
});
