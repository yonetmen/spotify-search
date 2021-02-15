import Artist from "./Artist";
import Album from "./Album";
import Track from "./Track";
import Playlist from "./Playlist";

const ItemList = ({ responseData, category }) => {

  const emptyMsg = (<div className="no-result">
    Looking for music?
  </div>);

  let total = 0;

  switch (category) {
    case "artist":
      total = responseData?.payload?.artists?.total;
      if (total > 0) {
        return (
          <div className="grid">
            {responseData.payload.artists.items.map((item) => (
              <Artist key={item.id} item={item} />
            ))}
          </div>
        );
      } else {
        return emptyMsg;
      }
    case "album":
      total = responseData?.payload?.albums?.total;
      if (total > 0) {
        return (
          <div className="grid">
            {responseData.payload.albums.items.map((item) => (
              <Album key={item.id} item={item} />
            ))}
          </div>
        );
      } else {
        return emptyMsg;
      }
    case "track":
      total = responseData?.payload?.tracks?.total;
      if (total > 0) {
        return (
          <div className="grid">
            {responseData.payload.tracks.items.map((item) => (
              <Track key={item.id} item={item} />
            ))}
          </div>
        );
      } else {
        return emptyMsg;
      }
    case "playlist":
      total = responseData?.payload?.playlists?.total;
      if (total > 0) {
        return (
          <div className="grid">
            {responseData.payload.playlists.items.map((item) => (
              <Playlist key={item.id} item={item} />
            ))}
          </div>
        );
      } else {
        return emptyMsg;
      }
    default:
      // return noResult;
  };
};

export default ItemList;
