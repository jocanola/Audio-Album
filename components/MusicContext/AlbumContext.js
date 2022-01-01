import React, { createContext, useEffect, useState } from "react";

export const AlbumContext = createContext();
export const AlbumContextProvider = ({ children, albums }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  const [album, setAlbum] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recentAlbums, setRecentAlbums] = useState([]);

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

  const addAlbum = (album, index) => {
    setCurrentSongIndex(index);
    if (recentAlbums.includes(album) === false) {
      setRecentAlbums([...recentAlbums, album]);
    }
    setIsPlaying(true);
  };
  console.log("recentPlayed", recentAlbums);
  return (
    <AlbumContext.Provider
      value={{
        albums: album,
        // addAlbum,
        setAlbum,
        SkipSong,
        currentSongIndex,
        isPlaying,
        setIsPlaying,
        addAlbum,
        recentAlbums,
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
};
