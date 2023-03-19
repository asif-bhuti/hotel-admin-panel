import "@/styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "next-themes";
import { Layout } from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const { noLayout } = pageProps;
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {!noLayout && <Header />}
      <Component {...pageProps} />
      {!noLayout && <Footer />}
    </ThemeProvider>
  );
}
