export class Card {
  constructor(customer, id, type) {
    this._cardID = id;
    this._customer = customer;
    this._cardType = type;
  }

  setCustomer(customer) {
    this._customer = customer;
  }

  getCustomer() {
    return this._customer;
  }

  setCardID(id) {
    this._cardID = id;
  }

  getCardID() {
    return this._cardID;
  }

  setCardType(type) {
    this._cardType = type;
  }

  getCardType() {
    return this._cardType;
  }

  bus(transferNumber) {}
  metroBus(numberOfStops) {}
}
