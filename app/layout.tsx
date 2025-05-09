import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { inter, playfairDisplay } from "./fonts/fonts";
import WhatsappIcon from "./components/WhatsappIcon";



export const metadata: Metadata = {
  title: "Jafrana Construction Works",
  description: "Jafrana Construction Company is a construction company that specializes in building residential and commercial buildings. We have been in the construction industry for over 10 years and have built a reputation for quality workmanship and excellent customer service.Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="node_modules/@fortawesome/fontawesome-free/css/all.min.css" />
      </head>
      <body
        className={`${playfairDisplay.className} ${inter.className} antialiased `}
      >
        <Header />
        <WhatsappIcon />
        {children}
        <Footer />
      </body>
    </html>
  );
}
