"use client";

import { evmosToEth } from "@evmos/address-converter";

import Link from "next/link";

export default function Table({
  headers,
  accounts,
}: {
  headers: ITableHeaders;
  accounts: IList;
}) {
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          {Object.entries(headers).map(([key, value]) => (
            <th
              key={value}
              className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider"
            >
              {value}
            </th>
          ))}

          <th className="px-6 py-3 border-b-2 border-gray-300"></th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {accounts.accounts.map((accouunt) => (
          <tr key={accouunt.base_account.account_number}>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
              <div className="flex items-center">
                <div>
                  <div className="text-sm leading-5 text-gray-800">
                    {evmosToEth(accouunt.base_account.address)}
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
              <div className="flex items-center">
                <div>
                  <div className="text-sm leading-5 text-gray-800">
                    {accouunt.base_account.address}
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
              <div className="flex items-center">
                <div>
                  <div className="text-sm leading-5 text-gray-800">
                    {accouunt.base_account.account_number}
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
              <Link
                className="hover:underline"
                href={{
                  pathname: "/dashboard/transactionDetails",
                  query: {
                    txsHash:
                      "0x9ceee2e2cfed142613ff10f08e482a6c9e22f45c3fdc57328ce3288c097f5d1e",
                  },
                }}
              >
                View Transaction
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
