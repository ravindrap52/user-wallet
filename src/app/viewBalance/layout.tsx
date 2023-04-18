"use client";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { ModalDialog } from "@/components/modalDialog";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-rows-[min-content_1fr] min-h-screen p-8">
      {children}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
