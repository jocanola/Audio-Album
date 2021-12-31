import styles from "./AudioContent.module.css";

export const AudioContent = ({ title, lecturer, isPlayList, isAudioList }) => {
  return (
    <>
      {isAudioList && <p className={styles["audioTitle"]}>{title}</p>}
      {isPlayList && (
        <marquee className={styles["audioBoldTitle"]}>{title}</marquee>
      )}
      {isPlayList && <p className={styles.audioLecturer}>{lecturer}</p>}
    </>
  );
};
