"use client";
import Image from "next/image";
import EvmosLogo from "../../../public/Evmos.svg";
import { NavLink } from "@/components/NavLink";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-rows-[min-content_1fr] min-h-screen p-8">
      <div>
        <div className="bg-[#ed4e33]">
          <div className="container px-4">
            <div className="flex items-center md:justify-between py-4">
              <div className="w-1/2 md:w-auto text-center text-white text-2xl font-medium">
                <Image
                  src={EvmosLogo}
                  alt="logo"
                  priority
                  width={128}
                  height={128}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#ed4e33] md:block  mt-6">
          <div className="container mx-auto px-4">
            <div className="md:flex">
              <div className="flex mr-8">
                <NavLink href="/dashboard">
                  <svg
                    className="h-6 w-6 fill-current mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3.889 3h6.222a.9.9 0 0 1 .889.91v8.18a.9.9 0 0 1-.889.91H3.89A.9.9 0 0 1 3 12.09V3.91A.9.9 0 0 1 3.889 3zM3.889 15h6.222c.491 0 .889.384.889.857v4.286c0 .473-.398.857-.889.857H3.89C3.398 21 3 20.616 3 20.143v-4.286c0-.473.398-.857.889-.857zM13.889 11h6.222a.9.9 0 0 1 .889.91v8.18a.9.9 0 0 1-.889.91H13.89a.9.9 0 0 1-.889-.91v-8.18a.9.9 0 0 1 .889-.91zM13.889 3h6.222c.491 0 .889.384.889.857v4.286c0 .473-.398.857-.889.857H13.89C13.398 9 13 8.616 13 8.143V3.857c0-.473.398-.857.889-.857z" />
                  </svg>{" "}
                  Dashboard
                </NavLink>
              </div>
              {/* <div className="flex mr-8">
                <NavLink href="/dashboard/transactionDetails">
                  <svg
                    className="h-6 w-6 fill-current mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 7h10V5l4 3.5-4 3.5v-2H8V7zm-6 8.5L6 12v2h10v3H6v2l-4-3.5z" />
                  </svg>{" "}
                  Transaction Details
                </NavLink>
              </div> */}
              <div className="flex -mb-px mr-8">
                <NavLink href="/dashboard/viewBalance">
                  <svg
                    className="h-6 w-6 fill-current mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 8H5.5v-.5l11-.88v.88H18V6c0-1.1-.891-1.872-1.979-1.717L5.98 5.717C4.891 5.873 4 6.9 4 8v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zm-1.5 7.006a1.5 1.5 0 1 1 .001-3.001 1.5 1.5 0 0 1-.001 3.001z" />
                  </svg>{" "}
                  View Balance
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow container mx-auto sm:px-4 pt-6 pb-8">{children}</div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
