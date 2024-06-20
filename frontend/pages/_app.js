import "@/styles/globals.css";
import "@/styles/loader.css";

export default function App({ Component, pageProps }) {
  return <div>
    <Component {...pageProps} />;
  </div>
}
