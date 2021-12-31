import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import { AudioCard } from "../components/AudioCard/AudioCard";
import { AudioList } from "../components/AudioList/AudioList";
import { CurrentPlaying } from "../components/CurrentPlaying/CurrentPlaying";
import { Header } from "../components/Header/Header";
import { Layout } from "../components/layouts/Layout";
import { NowPlaying } from "../components/layouts/NowPlaying/NowPlaying";
import { RecentList } from "../components/layouts/Recent/RecentList";
import { AlbumContext } from "../components/MusicContext/AlbumContext";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const res = await fetch(
    "https://dawahnigeria.com/dawahcast/albumapi3/214594"
  );
  const albums = await res.json();
  return {
    props: {
      albums,
    },
  };
}

export default function Home({ albums }) {
  const { nowPlaying } = useContext(AlbumContext);
  return (
    <>
      <Layout>
        <h1>DN MEDIA PLAYLIST</h1>
        <RecentList />
        <NowPlaying albums={albums} />
      </Layout>
      <CurrentPlaying album={nowPlaying} isPlaying />
    </>
  );
}
