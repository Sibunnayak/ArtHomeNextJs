import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import Providers from "@/app/providers";
import { NFTProvider } from "../../context/NFTContext";
import React from "react";
import { Suspense } from "react";

export const metadata = {
  title: "Art Home",
  description: "A NFT Marketplace",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

const RootLayout = ({ children }) => (
  <html suppressHydrationWarning>
    <React.StrictMode>
      <NFTProvider>
        <body>
          <Providers>
            <Navbar />
            <Suspense>
              <div className="pt-[80px] bg-gray-100 dark:bg-nft-dark">
                {children}
              </div>
            </Suspense>
            <Footer />
          </Providers>
        </body>
      </NFTProvider>
    </React.StrictMode>
  </html>
);

export default RootLayout;
