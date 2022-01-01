import { useContext, useRef } from "react";
import { AudioContent } from "../AudioContent/AudioContent";
import { AudioProgress } from "../AudioProgress/AudioProgress";
import { ConrolAudio } from "../Contoller/ControlAudio";
import { AlbumContext } from "../MusicContext/AlbumContext";
import styles from "./CurrentPlaying.module.css";
import { useEffect } from "react";

export const CurrentPlaying = () => {
  //context
  const { nowPlaying, isPlaying, albums, currentSongIndex } =
    useContext(AlbumContext);
  const audioEl = useRef(null);

  //   onClick={() => addAlbum(album)}
  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });
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
          ref={audioEl}
        ></audio>
        {/* <AudioProgress /> */}
      </div>
    </div>
  );
};
