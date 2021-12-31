import { useContext } from "react";
import { AudioContent } from "../AudioContent/AudioContent";
import { AlbumContext } from "../MusicContext/AlbumContext";
import styles from "./AudioCard.module.css";

export const AudioCard = () => {
  return (
    <div className={styles.audio}>
      <div className={styles.audioCard}></div>
      <AudioContent
        title="Rulings on Marriage"
        lecturer="Dr Sharaafudeen Raaji"
      />
    </div>
  );
};
