import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "../components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/stairTransition";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  title: "Shahriar Ghasempour",
  description: "shahriaarrr's portfolio website",
  icon: "my_logo.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
        {children}</body>
    </html>
  );
}
