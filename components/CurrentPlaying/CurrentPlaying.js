import { useContext, useRef } from "react";
import { AudioContent } from "../AudioContent/AudioContent";
import { AudioProgress } from "../AudioProgress/AudioProgress";
import { ConrolAudio } from "../Contoller/ControlAudio";
import { AlbumContext } from "../MusicContext/AlbumContext";
import styles from "./CurrentPlaying.module.css";
import { useEffect } from "react";

export const CurrentPlaying = () => {
  //context
  const {
    duration,
    progress,
    setAudioDetail,
    isPlaying,
    albums,
    currentSongIndex,
    onScrub,
    onScrubEnd,
  } = useContext(AlbumContext);
  const audioRef = useRef(null);

  //   onClick={() => addAlbum(album)}
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      setAudioDetail(audioRef);
      // audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  });

  const currentPercentage = duration
    ? `${(Number(progress) / Number(duration)) * 100}%`
    : "0%";

  console.log(currentPercentage);
  console.log("AlbumList", albums[currentSongIndex]);

  const currentPlayingAlbum = albums[currentSongIndex];
  return (
    <div className={styles["is-playlist"]}>
      <div className={styles["is-playing-img"]}></div>
      <div>
        <AudioContent
          isPlayList
          title={currentPlayingAlbum?.lectitle}
          lecturer={currentPlayingAlbum?.rp}
        />
      </div>
      <div>
        <ConrolAudio />
      </div>
      <div>
        <audio
          className="audio-player"
          src={albums[currentSongIndex]?.audio}
          ref={audioRef}
        ></audio>

        <AudioProgress
          duration={duration}
          progress={progress}
          currentPercentage={currentPercentage}
          onScrub={onScrub}
          onScrubEnd={onScrubEnd}
        />
      </div>
    </div>
  );
};
