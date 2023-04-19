"use client"
import "@/styles/customStyles.css";

import Image from "next/image";
import { Inter } from "next/font/google";

import EvmosLogo from "../../public/Evmos.svg";
import Link from "next/link";
import { Browser } from "@/messages";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Web3 from "web3";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
    <main className="custom-grid test" data-testid="test">
      <header className="flex items-center justify-between">
        <div>
          <Image src={EvmosLogo} alt="logo" width={256} height={256} />
        </div>
      </header>
      <section className="text-center">
        <div className="pb-4">
          <h1 className={`text-white text-2xl ${inter.className}`}>
            What is a Crypto Wallet?
          </h1>
          <p className={`text-white text-base ${inter.className}`}>
            Cryptocurrency wallets store users public and private keys, while
            providing an easy-to-use interface to manage crypto balances.
          </p>
        </div>
        <div>
          <Link
            className="px-10 py-3  text-white bg-[#ed4e33] rounded-md"
            href="/dashboard"
            prefetch={false}
          >
            Dashboard
          </Link>
        </div>
      </section>
      <footer>
        <p className={`text-white text-center ${inter.className}`}>
          &copy; All rights reserved
        </p>
      </footer>
    </main>
  );
}
