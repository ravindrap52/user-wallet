"use client";

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function TransactionDetails({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const [transactionInformation, setTransactionDetails] = useState<{
    blockHash: string;
    blockNumber: number;
    from: string;
    gas: number;
    gasPrice: string;
    to: string;
    value: string;
  }>({
    blockHash: "",
    blockNumber: 0,
    from: "",
    gas: 0,
    gasPrice: "",
    to: "",
    value: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const details = await window.web3.eth.getTransaction(
          searchParams.txsHash
        );
        setTransactionDetails((prevState) => ({
          ...prevState,
          blockHash: details.blockHash,
          blockNumber: details.blockNumber,
          from: details.from,
          to: details.to,
          gas: details.gas,
          gasPrice: details.gasPrice,
          value: details.value,
        }));
      } catch (error) {
        throw new Error("some thing went wrong while fetching Transaction");
      }
    })();
  }, [searchParams.txsHash]);
  return (
    <>
      <div className="w-3/4 flex justify-between">
        <div>
          <h1 className={`${inter.className}`}>From</h1>
          <p className={`${inter.className}`}>{transactionInformation.from}</p>
        </div>
        <div>
          <h1 className={`${inter.className}`}>To</h1>
          <p className={`${inter.className}`}>{transactionInformation.to}</p>
        </div>
      </div>
      <div className="w-96 rounded p-4 shadow-lg mt-8">
        <div className={`flex justify-between ${inter.className}`}>
          <div>Block Number:</div>
          <div>{transactionInformation.blockNumber}</div>
        </div>
        <div className={`flex justify-between ${inter.className}`}>
          <div>Gas:</div>
          <div>{transactionInformation.gas}</div>
        </div>
        <div className={`flex justify-between ${inter.className}`}>
          <div>Gas Price:</div>
          <div>{transactionInformation.gasPrice}</div>
        </div>
        <div className={`flex justify-between ${inter.className}`}>
          <div>Value:</div>
          <div>{transactionInformation.value}</div>
        </div>
      </div>
    </>
  );
}
