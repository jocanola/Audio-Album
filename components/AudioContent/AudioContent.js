import styles from "./AudioContent.module.css";

export const AudioContent = ({ title, lecturer, isPlayList }) => {
  const getStyle = !isPlayList
    ? styles.audioTitle
    : [styles.audioTitle, styles.audioBoldTitle];
  return (
    <>
      <p className={!isPlayList ? styles.audioTitle : styles.audioBoldTitle}>
        {title}
      </p>
      <p className={styles.audioLecturer}>{lecturer}</p>
    </>
  );
};
