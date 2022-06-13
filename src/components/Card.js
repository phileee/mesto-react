function Card({card, onCardClick}) {

  return (
  <article className="element">
    <img className="element__image" alt={card.name} src={card.link} onClick={() => onCardClick(card)} />
    <button className="element__trash" type="button" />
    <div className="element__bottom">
      <h2 className="element__caption">{card.name}</h2>
      <div className="element__likes">
        <button className="element__like" type="button" />
        <p className="element__like-count">{card.likes.length}</p>
      </div>
    </div>
  </article>
  );
}

export default Card;
