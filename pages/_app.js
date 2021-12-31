import { AlbumContextProvider } from "../components/MusicContext/AlbumContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AlbumContextProvider>
      <Component {...pageProps} />
    </AlbumContextProvider>
  );
}

export default MyApp;
