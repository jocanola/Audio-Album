import { AudioContent } from "../AudioContent/AudioContent";
import { ConrolAudio } from "../Contoller/ControlAudio";
import styles from "./AudioList.module.css";
export const AudioList = ({ isPlaying }) => {
  return (
    <div className={styles.audioList}>
      <p className={styles.audioNumber}>1</p>
      <div>
        <AudioContent
          isPlayList
          title="Islamic Rulings on Zakah and Sadaqaat."
          lecturer="Ustaadh Amubieya"
        />
      </div>
      {!isPlaying ? (
        <>
          <p className={styles.audioType}>Faqh</p>
          <p className={styles.audioSize}>34.44mb</p>
        </>
      ) : (
        <ConrolAudio />
      )}
    </div>
  );
};
