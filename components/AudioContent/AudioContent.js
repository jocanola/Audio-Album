import styles from "./AudioContent.module.css";

export const AudioContent = ({
  title,
  lecturer,
  isPlayList,

  reduceTitle,
}) => {
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str?.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <>
      {!isPlayList && (
        <p className={styles["audioTitle"]}>
          {reduceTitle ? truncateString(title, 50) : title}
        </p>
      )}

      {isPlayList && (
        <marquee className={styles["audioBoldTitle"]}>
          {truncateString(title, 42)}
        </marquee>
      )}

      <p className={styles.audioLecturer}>{lecturer}</p>
    </>
  );
};
