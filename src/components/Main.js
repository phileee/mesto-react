import React from 'react';
import {api} from '../utils/Api';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = React.useState('Загрузка');
  const [userDescription, setUserDescription] = React.useState('Загрузка');
  const [userAvatar, setUserAvatar] = React.useState('https://static.tildacdn.com/tild3637-3531-4565-a161-653761663261/74H8gif.gif');

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialUser()
    .then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
    .then((res) => {
      setCards(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])
  
  return (
      <main className="main">
        <section className="profile">
          <button className="profile__avatar-button" type="button" onClick={onEditAvatar}>
            <img className="profile__avatar" alt="аватар" src={userAvatar} />
          </button>
          <div className="profile__info">
            <div className="profile__name-inline">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__edit-button" type="button" onClick={onEditProfile} />
            </div>
            <p className="profile__prename">{userDescription}</p>
          </div>
          <button className="profile__add-button" type="button" onClick={onAddPlace} />
        </section>

        <section className="elements">
          {cards.map((card) => (
            <Card card={card} key={card._id} onCardClick={onCardClick}/>
          ))};
        </section>
      </main>
  );
}

export default Main;
