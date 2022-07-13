import React, { Component, useState } from "react";

export default function EditCard({ editCloseHandler, editCard, toEditCard }) {
  const [customerName, setCustomerName] = useState(
    toEditCard.getCustomer().getCustomerName()
  );
  const [customerType, setCustomerType] = useState(
    toEditCard.getCustomer().getCustomerType()
  );
  const [cardType, setCardType] = useState(toEditCard.getCardType());
  const [cardMoney, setCardMoney] = useState(
    toEditCard.getBalance ? toEditCard.getBalance() : toEditCard.getPoints()
  );

  return (
    <div className="form-back">
      <form className="form bg-dark">
        <button className="close" onClick={editCloseHandler}>
          ❌
        </button>

        <h1 className="heading">Edit Card</h1>

        <div className="side-by-side">
          <input
            className="input"
            type="text"
            placeholder="Customer Name.."
            onChange={(e) => setCustomerName(e.target.value)}
            value={customerName}
          />
          <input
            className="input"
            type="number"
            placeholder="Card Money.."
            onChange={(e) => setCardMoney(e.target.value)}
            value={cardMoney}
          />
        </div>

        <div className="side-by-side">
          <select
            className="select"
            onChange={(e) => setCardType(e.target.value)}
            value={cardType}
          >
            <option className="option" value="Istanbul Card">
              Istanbul Card
            </option>
            <option className="option" value="Blue Card">
              Blue Card
            </option>
            <option className="option" value="Electronic Card">
              Electronic Card
            </option>
          </select>

          <select
            className="select"
            onChange={(e) => setCustomerType(e.target.value)}
            value={customerType}
          >
            <option className="option" value="Full Fare">
              Full Fare
            </option>
            <option className="option" value="Teacher">
              Teacher
            </option>
            <option className="option" value="Student">
              Student
            </option>
          </select>
        </div>

        <button
          type="button"
          className="btn btn-secondary form-btn"
          onClick={() =>
            editCard(
              customerName,
              customerType,
              cardType,
              cardMoney,
              toEditCard
            )
          }
        >
          Edit
        </button>
      </form>
    </div>
  );
}
