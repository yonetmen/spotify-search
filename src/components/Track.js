import unknown from '../images/placeholder.png';

const Track = ({ item }) => {

  return (
    <div className="grid__item">
      <div className="card">
      <img className="card__img" src={item.album.images[0] !== undefined ? item.album.images[0].url : unknown} alt="" />
        <div className="card__content">
          <h1 className="card__header">{item.name.length > 14 ? item.name.substring(0, 14) + "..." : item.name} </h1>
          <p className="card__text">{item.artists[0].name.length > 20 ? item.artists[0].name.substring(0, 20) + "..." : item.artists[0].name}</p>
          <a href={item.external_urls.spotify} className="card__btn" target="_blank" rel="noreferrer">Track</a>
        </div>
      </div>
    </div>
  );
};

export default Track;