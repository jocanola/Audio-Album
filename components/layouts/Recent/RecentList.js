import { useContext } from "react";
import { AudioCard } from "../../AudioCard/AudioCard";
import { AlbumContext } from "../../MusicContext/AlbumContext";
import styles from "./RecentList.module.css";

export const RecentList = () => {
  const { recentAlbums } = useContext(AlbumContext);
  return (
    <>
      <h2>Recently Played</h2>
      <div className={styles["container"]}>
        {recentAlbums.map((item, i) => (
          <AudioCard key={i} title={item.lectitle} lecturer={item.rp} />
        ))}
      </div>
    </>
  );
};
