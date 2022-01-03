import React, { createContext, useEffect, useState } from "react";

export const AlbumContext = createContext();
export const AlbumContextProvider = ({ children, albums }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  const [album, setAlbum] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recentAlbums, setRecentAlbums] = useState([]);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioDetail, setAudioDetail] = useState(null);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > album.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, album.length]);

  const SkipSong = (forwards = true) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;

        if (temp > album.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = album.length - 1;
        }
        return temp;
      });
    }
  };

  const startTimer = () => {
    // Clear any timers already running

    clearInterval(audioDetail?.current);
    setProgress(audioDetail?.current?.currentTime);
    setDuration(audioDetail?.current?.duration);
    if (isPlaying) {
      setInterval(() => {
        if (audioDetail?.current?.ended) {
          // toNextTrack();
        } else {
          setProgress(audioDetail?.current?.currentTime);
        }
      }, [1000]);
    }
  };

  const addAlbum = (album, index) => {
    startTimer();
    setCurrentSongIndex(index);
    console.log(audioDetail?.current?.currentTime);
    console.log(audioDetail?.current?.duration);
    // setProgress(audioDetail?.current?.currentTime);
    // setDuration(audioDetail?.current?.duration);

    if (recentAlbums.includes(album) === false) {
      setRecentAlbums([...recentAlbums, album]);
    }
    setIsPlaying(true);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    // clearInterval(intervalRef.current);
    let audioCurrentTime = () => audioDetail?.current?.currentTime;
    audioCurrentTime = value;
    // if(audioDetail){
    // audioDetail?.current?.currentTime = value;

    // }
    setProgress(audioDetail?.current?.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };
  // console.log("recentPlayed", recentAlbums);
  console.log("progress", progress);
  console.log("duration", duration);

  return (
    <AlbumContext.Provider
      value={{
        albums: album,
        setAlbum,
        SkipSong,
        currentSongIndex,
        isPlaying,
        setIsPlaying,
        addAlbum,
        recentAlbums,
        progress,
        setProgress,
        setAudioDetail,
        audioDetail,
        duration,
        onScrub,
        onScrubEnd,
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
};
