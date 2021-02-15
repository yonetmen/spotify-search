import unknown from '../images/placeholder.png';

const Playlist = ({ item }) => {
  let listName = item.description.length > 20 ? item.description.substring(0, 20) + "..." : item.description;
  if(listName.trim() === "") listName = "No description."
  return (

    <div className="grid__item">
      <div className="card">
      <img className="card__img" src={item.images[0] !== undefined ? item.images[0].url : unknown} alt="" width="160" height="160" />
        <div className="card__content">
          <h1 className="card__header">{item.name.length > 12 ? item.name.substring(0, 12) + "..." : item.name} </h1>
          <p className="card__text">{listName}</p>
          <a href={item.external_urls.spotify} className="card__btn" target="_blank" rel="noreferrer">Playlist</a>
        </div>
      </div>
    </div>
  );
};

export default Playlist;