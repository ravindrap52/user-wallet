import { API_FOR_EXCHANGE_RATES } from "@/consts";



/**
 * This will return the fiat value of the selected curecny
 *
 * @param {currecny} currecny currecny in string format
 * @returns {number} returns the number
 */

export const getTokenPrices = async (currecny: string): Promise<number> => {
  const response = await fetch(API_FOR_EXCHANGE_RATES);
  const { rates } = (await response.json()) as ExchangeRates;
  const { value } = rates[currecny];
  return value;
};
