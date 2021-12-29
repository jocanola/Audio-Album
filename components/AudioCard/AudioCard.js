import { AudioContent } from "../AudioContent/AudioContent";
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
