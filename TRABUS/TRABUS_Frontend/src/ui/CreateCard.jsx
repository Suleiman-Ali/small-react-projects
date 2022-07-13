import React, { Component, useRef } from "react";

export default function CreateCard({ createCloseHandler, createDatabaseCard }) {
  const customerID = useRef(null);
  const customerName = useRef(null);
  const customerType = useRef(null);
  const cardID = useRef(null);
  const cardType = useRef(null);
  const cardMoney = useRef(null);

  return (
    <div className="form-back">
      <form className="form bg-dark">
        <button className="close" onClick={createCloseHandler}>
          ❌
        </button>

        <h1 className="heading">Create Card</h1>

        <div className="side-by-side">
          <input
            required
            ref={customerName}
            className="input"
            type="text"
            placeholder="Customer Name.."
          />
          <input
            required
            ref={customerID}
            className="input"
            type="number"
            placeholder="Customer ID.."
          />
        </div>

        <div className="side-by-side">
          <input
            required
            ref={cardMoney}
            className="input"
            type="number"
            placeholder="Card Money.."
          />
          <input
            required
            ref={cardID}
            className="input"
            type="number"
            placeholder="Card ID.."
          />
        </div>

        <div className="side-by-side">
          <select ref={cardType} className="select">
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

          <select ref={customerType} className="select">
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
          onClick={() =>
            createDatabaseCard(
              customerID,
              customerName,
              customerType,
              cardID,
              cardType,
              cardMoney
            )
          }
          type="button"
          className="btn btn-secondary form-btn"
        >
          Create
        </button>
      </form>
    </div>
  );
}
