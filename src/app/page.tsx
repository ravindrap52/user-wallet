import "@/app/styles/customStyles.css";

import Image from "next/image";
import { Inter } from "next/font/google";

import EvmosLogo from "../../public/Evmos.svg";
import { NavLink } from "@/components/NavLink";

const inter = Inter({ subsets: ["latin"] });

export default  function Home() {
  return (
    <main className="custom-grid test">
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
          <NavLink href="/viewBalance">Get Started</NavLink>
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
