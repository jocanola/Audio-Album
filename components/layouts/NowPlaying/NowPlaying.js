import { AudioList } from "../../AudioList/AudioList";
export const NowPlaying = ({ albums }) => {
  return (
    <div>
      <h2>Now Playing</h2>
      <hr />
      {albums.map((album, i) => {
        return (
          <AudioList
            key={album.Nid}
            listNo={i}
            title={album.albumtitle}
            lectureTitle={album.lectitle}
            audio={album.audio}
            audioSize={album.mp3size}
            lecturer={album.rp}
            album={album}
          />
        );
      })}
    </div>
  );
};
