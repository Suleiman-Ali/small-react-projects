import React, { Component } from "react";

export default function Card({
  card,
  deleteCard,
  editOpenHandler,
  operateOpenHandler,
}) {
  const customer = card.getCustomer();

  // prettier-ignore
  const customerName = { header: "Customer Name", text: customer.getCustomerName() };
  // prettier-ignore
  const customerID = { header: "Customer ID", text: customer.getCustomerID() };
  // prettier-ignore
  const customerType = { header: "Customer Type", text: customer.getCustomerType() };
  // prettier-ignore
  const cardID = { header: "Card ID", text: card.getCardID() };
  // prettier-ignore
  const cardType = { header: "Card Type", text: card.getCardType() };
  // prettier-ignore
  const cardMoney = {
    header: `Card ${cardType.text === "Istanbul Card" ? "Balance" : "Points"}`,
    text: cardType.text === "Istanbul Card" ? card.getBalance() : card.getPoints(),
  };

  return (
    <div className="card-custom">
      <div className="data-col">
        <p className="data-col__header">{cardID.header}</p>
        <p className="data-col__text">{cardID.text}</p>
      </div>

      <div className="data-col">
        <p className="data-col__header">{cardType.header}</p>
        <p className="data-col__text">{cardType.text}</p>
      </div>

      <div className="data-col">
        <p className="data-col__header">{cardMoney.header}</p>
        <p className="data-col__text">{cardMoney.text}</p>
      </div>

      <div className="data-col">
        <p className="data-col__header">{customerName.header}</p>
        <p className="data-col__text">{customerName.text}</p>
      </div>

      <div className="data-col">
        <p className="data-col__header">{customerID.header}</p>
        <p className="data-col__text">{customerID.text}</p>
      </div>

      <div className="data-col">
        <p className="data-col__header">{customerType.header}</p>
        <p className="data-col__text">{customerType.text}</p>
      </div>

      <div className="btns">
        <button
          className="btn-operation btn btn-primary"
          onClick={() => operateOpenHandler(card)}
        >
          Operate
        </button>
        <button
          className="btn-operation btn btn-warning"
          onClick={() => editOpenHandler(card)}
        >
          Edit
        </button>
        <button
          className="btn-operation btn btn-danger"
          onClick={() => deleteCard(card)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
