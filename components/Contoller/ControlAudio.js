import Image from "next/image";
import { useContext } from "react";
import { AlbumContext } from "../MusicContext/AlbumContext";
import styles from "./ControlAudio.module.css";

export const ConrolAudio = () => {
  const { isPlaying, setIsPlaying, SkipSong } = useContext(AlbumContext);
  return (
    <div className={styles.controlAudio}>
      <Image
        src="/images/Start.svg"
        height={30}
        width={30}
        onClick={() => SkipSong(false)}
      />
      <div className={styles.controlAudioCenter}>
        {isPlaying ? (
          <Image
            src="/images/pause.svg"
            height={30}
            width={30}
            onClick={() => setIsPlaying(!isPlaying)}
          />
        ) : (
          <Image
            src="/images/Play.svg"
            height={30}
            width={30}
            onClick={() => setIsPlaying(!isPlaying)}
          />
        )}
      </div>
      <Image
        src="/images/End.svg"
        height={30}
        width={30}
        onClick={() => SkipSong()}
      />
    </div>
  );
};
