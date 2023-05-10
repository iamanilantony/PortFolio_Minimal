import { AppProps } from "next/app";
import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class">
    <Component {...pageProps} />
    <Analytics />
  </ThemeProvider>
);

export default MyApp;
