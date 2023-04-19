import { API_FOR_EXCHANGE_RATES } from "@/consts";



/**
 * This will return the fiat value of the selected currency
 *
 * @param {currency} currency currency in string format
 * @returns {number} returns the number
 */

export const getTokenExchangeRate = async (currency: string): Promise<number> => {
  const response = await fetch(API_FOR_EXCHANGE_RATES);
  const { rates } = (await response.json()) as ExchangeRates;
  const { value } = rates[currency];
  return value;
};
