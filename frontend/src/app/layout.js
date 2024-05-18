import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import AuthContextProvider from "@/contexts/AuthContext/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Medibook | Book your medical appointments",
  description: "Book your medical appointments online. Fast and easy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <body>
        <AuthContextProvider>
          <div className="header">
            <Header />
          </div>
          {children}
          <div className="footer">
            <Footer />
          </div>
        </AuthContextProvider>
      </body>
    </html>
  );
}
