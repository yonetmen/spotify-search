import unknown from '../images/placeholder.png';

const Artist = ({ item }) => {

  return (

    <div className="grid__item">
      <div className="card">
        <img className="card__img" src={item.images[0] !== undefined ? item.images[0].url : unknown} alt="" width="160" height="160" />
        <div className="card__content">
          <h1 className="card__header">{item.name.length > 14 ? item.name.substring(0, 14) + "..." : item.name} </h1>
          <p className="card__text">Followers: {item.followers.total}</p>
          <a href={item.external_urls.spotify} className="card__btn" target="_blank" rel="noreferrer">Profile</a>
        </div>
      </div>
    </div>
  );
};

export default Artist;