import unknown from '../images/placeholder.png';

const Album = ({ item }) => {
  let trackCount = {
    marginBottom: '10px',
    letterSpacing: '1px',
    color: '#191919',
    opacity: '0.7'
  };

  return (
    <div className="grid__item">
      <div className="card">
      <img className="card__img" src={item.images[0] !== undefined ? item.images[0].url : unknown} alt=""/>
        <div className="card__content">
          <h1 className="card__header">{item.name.length > 14 ? item.name.substring(0, 14) + "..." : item.name} </h1>
          <p className="card__text">{item.artists[0].name.length > 20 ? item.artists[0].name.substring(0, 20) + "..." : item.artists[0].name}</p>
          <p style={trackCount}>Released: {item.release_date}</p>
          <a href={item.external_urls.spotify} className="card__btn" target="_blank" rel="noreferrer">Album</a>
        </div>
      </div>
    </div>
  );
};

export default Album;