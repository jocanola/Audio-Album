import styles from "./AudioProgress.module.css";

export const AudioProgress = () => {
  return (
    <div className={styles["progress"]}>
      <p>18.90</p>
      <progress
        id="file"
        value="70"
        max="100"
        min=""
        className={styles["progress-bar"]}
      />
      <p>39.90</p>
    </div>
  );
};
