import { useContext } from "react";
import { AudioContent } from "../AudioContent/AudioContent";
import { AudioProgress } from "../AudioProgress/AudioProgress";
import { ConrolAudio } from "../Contoller/ControlAudio";
import { AlbumContext } from "../MusicContext/AlbumContext";
import styles from "./AudioList.module.css";
export const AudioList = ({
  listNo,
  title,
  lectureTitle,
  audio,
  audioSize,
  lecturer,
  album,
}) => {
  const { addAlbum, nowPlaying } = useContext(AlbumContext);
  console.log(nowPlaying);
  return (
    <div className={styles["audio-list"]} onClick={() => addAlbum(album)}>
      <p className={styles["audio-number"]}>{listNo}</p>
      <AudioContent isAudioList title={lectureTitle} lecturer={lecturer} />
      <p className={styles["audio-type"]}>Faqh</p>
      <p className={styles["audio-size"]}>{audioSize}</p>
    </div>
  );
};
