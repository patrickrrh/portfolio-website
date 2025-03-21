import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import FooterWrapper from "@/components/FooterWrapper"; // Import the client footer wrapper

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Patrick Roberto Halim",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <FooterWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}
