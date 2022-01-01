import { useContext } from "react";
import { AudioContent } from "../AudioContent/AudioContent";
import { AlbumContext } from "../MusicContext/AlbumContext";
import styles from "./AudioList.module.css";
export const AudioList = ({
  listNo,
  lectureTitle,
  audioSize,
  lecturer,
  album,
}) => {
  const { addAlbum, nowPlaying } = useContext(AlbumContext);

  return (
    <div
      className={styles["audio-list"]}
      onClick={() => addAlbum(album, listNo)}
    >
      <p className={styles["audio-number"]}>{listNo + 1}</p>
      <div className={styles["audio-content"]}>
        <AudioContent
          isAudioList
          title={lectureTitle}
          lecturer={lecturer}
          reduceTitle
        />
      </div>

      <p className={styles["audio-type"]}>Faqh</p>
      <p className={styles["audio-size"]}>{audioSize}</p>
    </div>
  );
};
