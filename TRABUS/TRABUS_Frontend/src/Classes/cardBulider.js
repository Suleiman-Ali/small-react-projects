import { CustomerBulider } from "./customerBulider.js";
import { IstanbulCard } from "./istanbulCard.js";
import { BlueCard } from "./blueCard.js";
import { ElectronicCard } from "./electronicCard.js";

export class CardBulider {
  // prettier-ignore
  constructor(cardID, cardType, cardMoney, customerID, customerName, customerType) {
    this._card = undefined;
    this._customer = new CustomerBulider(customerID, customerName, customerType).bulid();

    // prettier-ignore
    if (cardType === "Istanbul Card") 
          this._card = new IstanbulCard(cardID, this._customer, cardMoney, cardType);
  
      else if (cardType === "Blue Card")  
          this._card = new BlueCard(cardID, this._customer, cardMoney, cardType);
  
      else if (cardType === "Electronic Card") 
          this._card = new ElectronicCard(cardID, this._customer, cardMoney, cardType);
  }

  bulid() {
    return this._card;
  }
}
