import React, { Component, Fragment } from "react";
import axios from "axios";
import { CardBulider } from "../Classes/cardBulider";
import Cards from "./Cards";
import CreateCard from "./CreateCard";
import "../css/index.css";
import EditCard from "./EditCard";
import OperateCard from "./OperateCard";
import Spinner from "./Spinner";
import { IstanbulCard } from "../Classes/istanbulCard";

const API_URL = "https://mighty-castle-11126.herokuapp.com/api/cards/";

export default class App extends Component {
  state = {
    cards: [],
    isCreate: false,
    isEdit: false,
    toEditCard: null,
    isOperate: false,
    currentCard: null,
    isSpinner: false,
  };

  async componentDidMount() {
    this.setState({ isSpinner: true });

    const response = await axios.get(API_URL);
    if (response.status !== 200) return alert("ERROR: Something went wrong.");
    const { data: dbCards } = response;
    // prettier-ignore
    const functionalCards = dbCards.map((card) => this.createFunctionalCard(card));
    this.setState({ cards: functionalCards, isSpinner: false });
  }

  createFunctionalCard = (dbCard) => {
    const { _cardID, _cardType, _cardMoney, _customer } = dbCard;
    const { _customerID, _customerName, _customerType } = _customer;

    const functionalCard = new CardBulider(
      _cardID,
      _cardType,
      Number(_cardMoney.toFixed(2)),
      _customerID,
      _customerName,
      _customerType
    ).bulid();

    return functionalCard;
  };

  deleteCard = async (card) => {
    this.setState({ isSpinner: true });

    const response = await axios.delete(API_URL + `/${card.getCardID()}`);
    if (response.status !== 200) return alert("ERROR: Something went wrong.");
    window.location.reload();
  };

  createDatabaseCard = async (
    customerID,
    customerName,
    customerType,
    cardID,
    cardType,
    cardMoney
  ) => {
    if (
      !customerID.current.value ||
      !customerName.current.value ||
      !cardID.current.value ||
      !cardMoney.current.value
    )
      return alert("ERROR: Please don't leave any of the inputs empty.");

    for (let card of this.state.cards)
      if (card.getCardID() === Number(cardID.current.value))
        return alert(
          "ERROR: Cannot add an existing card, please provide a diffrent card id."
        );

    this.setState({ isSpinner: true, isCreate: false });

    const _cardID = Number(cardID.current.value);
    const _cardType = cardType.current.value;
    const _cardMoney = Number(cardMoney.current.value);
    const _customer = {
      _customerID: Number(customerID.current.value),
      _customerName: customerName.current.value,
      _customerType: customerType.current.value,
    };
    const dbCard = { _cardID, _cardMoney, _cardType, _customer };

    const response = await axios.post(API_URL, dbCard);
    if (response.status !== 200) return alert("ERROR: Something went wrong.");
    window.location.reload();
  };

  createOpenHandler = () => {
    this.setState({ isCreate: true });
  };

  createCloseHandler = (event) => {
    this.setState({ isCreate: false });
  };

  // prettier-ignore
  editCard = async (customerName, customerType, cardType, cardMoney, toEditCard) => {
    if (!customerName || !cardMoney) return alert("ERROR: Please don't leave any of the inputs empty.");

    this.setState({ isSpinner: true, isEdit: false });
    const _cardID = toEditCard.getCardID();
    const _cardType = cardType;
    const _cardMoney = Number(cardMoney);
    const _customer = {
      _customerID: toEditCard.getCustomer().getCustomerID(),
      _customerName: customerName,
      _customerType: customerType,
    };
    const card = {_cardID, _cardType, _cardMoney, _customer};

    const response = await axios.put(API_URL + "/" + toEditCard.getCardID(), card);
    if (response.status !== 200) return alert("ERROR: Something went wrong.")
    window.location.reload();
    }

  editCloseHandler = () => {
    this.setState({ isEdit: false });
  };

  editOpenHandler = (toEditCard) => {
    this.setState({ isEdit: true, toEditCard });
  };

  operateCloseHandler = async (card) => {
    this.setState({ isSpinner: true, isOperate: false });

    const _cardID = card.getCardID();
    const _cardType = card.getCardType();
    const _cardMoney = card.getBalance
      ? Number(card.getBalance()).toFixed(2)
      : Number(card.getPoints()).toFixed(2);
    const _customer = {
      _customerID: card.getCustomer().getCustomerID(),
      _customerName: card.getCustomer().getCustomerName(),
      _customerType: card.getCustomer().getCustomerType(),
    };
    const cardDb = { _cardID, _cardType, _cardMoney, _customer };

    const response = await axios.put(API_URL + "/" + card.getCardID(), cardDb);
    if (response.status !== 200) return alert("ERROR: Something went wrong.");
    window.location.reload();
  };

  operateOpenHandler = (card) => {
    this.setState({ currentCard: card, isOperate: true });
  };

  render() {
    return (
      <div className="container bg-dark">
        <button
          className="btn btn-secondary btn-custom"
          onClick={this.createOpenHandler}
        >
          Create Card
        </button>

        <Cards
          cards={this.state.cards}
          deleteCard={this.deleteCard}
          editOpenHandler={this.editOpenHandler}
          operateOpenHandler={this.operateOpenHandler}
        />

        {this.state.isSpinner && <Spinner />}

        {this.state.isCreate && (
          <CreateCard
            createCloseHandler={this.createCloseHandler}
            createDatabaseCard={this.createDatabaseCard}
          />
        )}

        {this.state.isEdit && (
          <EditCard
            editCloseHandler={this.editCloseHandler}
            editCard={this.editCard}
            toEditCard={this.state.toEditCard}
          />
        )}

        {this.state.isOperate && (
          <OperateCard
            card={this.state.currentCard}
            operateCloseHandler={this.operateCloseHandler}
          />
        )}
      </div>
    );
  }
}
