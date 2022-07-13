import React, { Component } from "react";
import Card from "./Card";

export default function Cards({
  cards,
  deleteCard,
  editOpenHandler,
  operateOpenHandler,
}) {
  if (cards.length === 0)
    return <p className="msg">There are no Cards in the Database.</p>;

  const mappedCards = cards.map((card) => (
    <Card
      deleteCard={deleteCard}
      key={card._cardID}
      card={card}
      editOpenHandler={editOpenHandler}
      operateOpenHandler={operateOpenHandler}
    />
  ));

  return <div className="cards-custom">{mappedCards}</div>;
}
