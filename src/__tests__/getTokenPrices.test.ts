import { getTokenExchangeRate } from "@/helpers/getTokenPrices";

const mockExchangeRates = {
  rates: {
    eur: {
      name: "Euro",
      unit: "€",
      value: 26670.971,
      type: "fiat",
    },
  },
};

const value = 26670.971;

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockExchangeRates),
  })
);

describe("Token Exchange Rates", () => {
  let value: any;

  beforeEach(async () => {
    value = await getTokenExchangeRate("eur");
  });

  it("Then the correct average should be returned", () => {
    expect(value).toEqual(value);
  });
});
