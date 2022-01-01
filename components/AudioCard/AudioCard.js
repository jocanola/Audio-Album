import { useContext } from "react";
import { AudioContent } from "../AudioContent/AudioContent";
import styles from "./AudioCard.module.css";

export const AudioCard = ({ title, lecturer }) => {
  return (
    <div className={styles.audio}>
      <div className={styles.audioCard}></div>
      <AudioContent title={title} lecturer={lecturer} reduceTitle />
    </div>
  );
};
