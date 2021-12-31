import React, { createContext, useState } from "react";

export const AlbumContext = createContext();
export const AlbumContextProvider = ({ children, albums }) => {
  //Add Music to play to context
  const [nowPlaying, setNowPlaying] = useState([]);
  const addAlbum = (album) => {
    setNowPlaying(album);
  };
  
  console.log(albums);
  return (
    <AlbumContext.Provider
      value={{
        albums: "album",
        recents: "recent",
        nowPlaying,
        addAlbum,
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
};
