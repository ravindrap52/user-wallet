"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Web3 from "web3";
import { toast } from "react-toastify";
import { Inter } from "next/font/google";

import { Browser } from "../messages";
import { checkIfNumberIsHex, convertToCrypto } from "@/helpers/decimalHelpers";
import { checkIfStringContains } from "@/helpers/stringHelper";
import { getTokenPrices } from "@/helpers/getTokenPrices";
import { getCurrencyInfoByLanguageLocale } from "@/helpers/currencyHelper";
import { locales } from "@/consts";

const inter = Inter({ subsets: ["latin"] });

/**
 * Fetch Balance for address starting with string `evmos1`
 *
 * @param {address} address addressin string format
 * @returns {number} returns the balance, if not zero will be returned
 */
const fetchBalanceForCosmAddress = async (address: string): Promise<number> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_COSMO_BALANCE_URL}${address}`
  );
  const body = await response.json();
  if (!response.ok) {
    toast.error(body.message);
    throw new Error(body.message);
  }
  const { balances } = body;
  return balances[0].amount || 0;
};

/**
 * Fetch Balance for address starting with Hex string `0xgg`
 *
 * @param {address} address address in string format
 * @returns {number} returns the balance, if not zero will be returned
 */
const fetchBalanceForHexAddress = async (address: string): Promise<number> => {
  const balance = await window.web3.eth.getBalance(address);
  return balance || 0;
};

const formatBalance = (balance: number, currencyLocale: ILocaleProperties) => {
  return new Intl.NumberFormat(currencyLocale.countryLocale, {
    style: 'currency',
    currency: currencyLocale.isoCurrencyLocale,
  }).format(balance);
};

export default function ViewBalance() {
  // getting browser language
  // TODO: navigator in undefined
  const language = navigator.language;
  const currencyLocale = getCurrencyInfoByLanguageLocale(language);
  const [currency, setCurrency] = useState(currencyLocale.iso);
  const [balance, setBalance] = useState(0);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<walletForm>();
  // submitting the form
  const onSubmit: SubmitHandler<walletForm> = async (data) => {
    const { address } = data;
    const currentCryptoValue = await getTokenPrices(currency);
    if (checkIfStringContains(address)) {
      const amount = await fetchBalanceForCosmAddress(address);
      const cryptoValue = convertToCrypto(amount);
      const balance = cryptoValue * currentCryptoValue;
      setBalance(balance);
    } else if (checkIfNumberIsHex(address)) {
      const amount = await fetchBalanceForHexAddress(address);
      const cryptoValue = convertToCrypto(amount);
      const balance = cryptoValue * currentCryptoValue;
      setBalance(balance);
    }
  };

  const changeDefaultCurrency = (event: any) => {
    setCurrency(event.target.value);
  };
  /* check if the browser supports crypto */
  useEffect(() => {
    (async () => {
      if (window.ethereum) {
        const provider = new Web3.providers.HttpProvider(
          `${process.env.NEXT_PUBLIC_NODE_URL}`
        );
        window.web3 = new Web3(provider);
      } else {
        toast.info(Browser.NOT_SUPPORTED);
      }
    })();
  }, []);

  return (
    <>
      <header className="flex justify-self-end">
        <div className={`${inter.className} self-center`}>Choose Currency</div>
        <div className="px-3 mb-6 md:mb-0">
          <div className="relative">
            <select
              value={currency}
              onChange={changeDefaultCurrency}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              {Object.entries(locales).map(([key, value]) => (
                <option value={value.iso} key={value.iso}>
                  {value.name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </header>
      <section className="w-full grid justify-items-center items-center">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2
              className={`mt-6 text-center text-3xl font-extrabold text-gray-900 ${inter.className}`}
            >
              Check Your Balance
            </h2>
          </div>

          <div className="rounded bg-white max-w-md  overflow-hidden shadow-xl p-5">
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="rounded-md  space-y-px">
                <div>
                  <label
                    htmlFor="email_address"
                    className={`block text-sm font-medium text-gray-700 ${inter.className}`}
                  >
                    Evmos or Hex address
                  </label>
                  <input
                    {...register("address", { required: true })}
                    type="text"
                    id="address"
                    placeholder="evmos1..."
                    className={`mt-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight 
				  			focus:outline-none focus:shadow-outline ${inter.className}`}
                  />
                  {errors.address && (
                    <span className={`text-red-500 ${inter.className}`}>
                      Address is required
                    </span>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className={`group relative w-full flex justify-center py-2 px-4 border 
							border-transparent text-sm font-medium rounded-md text-white bg-[#ed4e33] ${inter.className}`}
                >
                  Get Balance
                </button>
              </div>
            </form>
          </div>
          <div>
            <div>
              <h2
                className={`mt-6 text-center text-3xl font-extrabold text-gray-900 ${inter.className}`}
              >
                {balance > 0 && `The currenct balance is ${formatBalance(balance, currencyLocale)}`}
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
