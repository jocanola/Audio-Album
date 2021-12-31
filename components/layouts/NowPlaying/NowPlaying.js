import { useContext } from "react";
import { AudioList } from "../../AudioList/AudioList";
import { AlbumContext } from "../../MusicContext/AlbumContext";
import styles from "./NowPlaying.module.css";
export const NowPlaying = ({ albums }) => {
  console.log(albums);
  return (
    <div className={styles["container"]}>
      <h2>Now Playing</h2>
      <hr />
      {albums.map((album, i) => {
        
        return (
          <AudioList
            key={album.Nid}
            listNo={i}
            title={album.albumtitle}
            lectureTitle={album.lectitle}
            audio={album.audio}
            audioSize={album.mp3size}
            lecturer={album.rp}
            album={album}
          />
        );
      })}
    </div>
  );
};
