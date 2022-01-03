import styles from "./AudioProgress.module.css";

export const AudioProgress = ({
  duration,
  currentPercentage,
  onScrub,
  onScrubEnd,
  progress,
}) => {
  function secondsToHms(d) {
    d = Number(d);

    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);
    const hour = h > 0 ? ("0" + h).slice(-2) : null;
    if (h > 0) {
      return (
        ("0" + h).slice(-2) +
        ":" +
        ("0" + m).slice(-2) +
        ":" +
        ("0" + s).slice(-2)
      );
    }

    return ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2);
  }

  console.log("current Progress", currentPercentage);
  return (
    <div className={styles["progress"]}>
      <p>{secondsToHms(progress)}</p>
      <input
        type="range"
        value={Math.round(currentPercentage)}
        min="0"
        step="1"
        max={duration ? duration : `${duration}`}
        className="progress"
        onChange={(e) => onScrub(e.target.value)}
        // onMouseUp={onScrubEnd}
        // onKeyUp={onScrubEnd}
        // style={{ background: trackStyling }}
        className={styles["progress-bar"]}
      />
      <p>{secondsToHms(duration)}</p>
    </div>
  );
};
