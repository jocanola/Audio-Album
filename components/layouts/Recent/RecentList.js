import { AudioCard } from "../../AudioCard/AudioCard";
import styles from "./RecentList.module.css";
export const RecentList = () => {
  return (
    <>
      <h2>Recently Played</h2>
      <div className={styles["container"]}>
        <AudioCard />
        <AudioCard />
        <AudioCard />
        <AudioCard />
        <AudioCard />
        <AudioCard />
        <AudioCard />
        <AudioCard />
        <AudioCard />
        <AudioCard />
        <AudioCard />
        <AudioCard />
      </div>
    </>
  );
};
