import { useContext } from "react";
import { AudioContent } from "../AudioContent/AudioContent";
import { AudioProgress } from "../AudioProgress/AudioProgress";
import { ConrolAudio } from "../Contoller/ControlAudio";
import { AlbumContext } from "../MusicContext/AlbumContext";
import styles from "./CurrentPlaying.module.css";

export const CurrentPlaying = ({ album }) => {
  console.log(album);
  //   onClick={() => addAlbum(album)}
  return (
    <div className={styles["is-playlist"]}>
      <div className={styles["is-playing-img"]}></div>
      <div>
        <AudioContent isPlayList title={album.lectitle} lecturer={album.rp} />
      </div>
      <div>
        <ConrolAudio />
      </div>
      <div>
        <AudioProgress />
      </div>
    </div>
  );
};
