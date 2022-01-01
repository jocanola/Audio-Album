import { useContext, useEffect } from "react";
import { CurrentPlaying } from "../components/CurrentPlaying/CurrentPlaying";
import { Layout } from "../components/layouts/Layout";
import { NowPlaying } from "../components/layouts/NowPlaying/NowPlaying";
import { RecentList } from "../components/layouts/Recent/RecentList";
import { AlbumContext } from "../components/MusicContext/AlbumContext";

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
  const { nowPlaying, setAlbum, recentAlbums } = useContext(AlbumContext);

  useEffect(() => {
    setAlbum(albums);
  }, [albums]);
  return (
    <>
      <Layout>
        <h1>DN MEDIA PLAYLIST</h1>
        {recentAlbums.length > 0 && <RecentList />}
        <NowPlaying albums={albums} />
      </Layout>
      <CurrentPlaying album={nowPlaying} isPlaying />

      {/* <ReactJkMusicPlayer audioLists={albums} /> */}
    </>
  );
}
