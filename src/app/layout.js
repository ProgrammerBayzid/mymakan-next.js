"use client";

import { Nunito } from "next/font/google";
import { useEffect, useState } from "react";
import PopupProvider from "@/Context/successPopupContext";
import { Toaster } from "react-hot-toast";
import GoogleRegisterAuthProvider from "./Component/GoogleRegisterAuthProvider/GoogleRegisterAuthProvider"; // Correct import
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChatValueProvider from "@/Context/chatContext";

const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  subsets: ["latin"],
  display: "swap",
});

// export const metadata = {
//   title: "Welcome to next js",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={nunito.className}>
        <div>
          <div>
            <ChatValueProvider>
              <GoogleRegisterAuthProvider>
                <PopupProvider>{children}</PopupProvider>
              </GoogleRegisterAuthProvider>
            </ChatValueProvider>
          </div>
        </div>
        <Toaster
          className="w-full whitespace-none"
          position="top-center"
          reverseOrder={false}
        />
      </body>
    </html>
  );
}
