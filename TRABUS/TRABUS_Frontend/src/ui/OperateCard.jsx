import React, { Component, useState } from "react";

export default function OperateCard({ card, operateCloseHandler }) {
  const getMoney = card.getBalance
    ? card.getBalance.bind(card)
    : card.getPoints.bind(card);

  const [input, setInput] = useState();
  const [history, setHistory] = useState({
    prevAmount: null,
    currentAmount: getMoney(),
    deductedAmount: null,
  });

  const busHandler = () => {
    const prevAmount = getMoney().toFixed(2);
    card.bus(Number(input));
    const currentAmount = getMoney().toFixed(2);
    const deductedAmount = (prevAmount - currentAmount).toFixed(2);

    setHistory({ prevAmount, currentAmount, deductedAmount });
  };

  const metroBusHandler = () => {
    const prevAmount = getMoney().toFixed(2);
    card.metroBus(Number(input));
    const currentAmount = getMoney().toFixed(2);
    const deductedAmount = (prevAmount - currentAmount).toFixed(2);

    setHistory({ prevAmount, currentAmount, deductedAmount });
  };

  return (
    <div className="form-back">
      <div className="operate bg-dark">
        <button className="close" onClick={() => operateCloseHandler(card)}>
          ❌
        </button>

        <h1 className="heading">
          Operate on Card where ID is {card.getCardID()}
        </h1>

        <input
          type="number"
          className="input"
          placeholder="Transfer Number | Number of Stops"
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="operate-custom">
          <div className="data-col-2">
            <p className="data-col__header">Deducted Amount</p>
            <p className="data-col__text">{history.deductedAmount}</p>
          </div>
          <div className="data-col-2">
            <p className="data-col__header">Previous Amount</p>
            <p className="data-col__text">{history.prevAmount}</p>
          </div>
          <div className="data-col-2">
            <p className="data-col__header">Current Amount</p>
            <p className="data-col__text">{history.currentAmount}</p>
          </div>
        </div>

        <div className="side-by-side" style={{ gap: "1rem" }}>
          <button
            type="button"
            className="btn btn-secondary form-btn"
            onClick={metroBusHandler}
          >
            Metrobus
          </button>
          <button
            type="button"
            className="btn btn-secondary form-btn"
            onClick={busHandler}
          >
            Bus
          </button>
        </div>
      </div>
    </div>
  );
}
