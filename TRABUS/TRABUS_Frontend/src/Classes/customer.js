export class Customer {
  constructor(id, name, type) {
    this._customerID = id;
    this._customerName = name;
    this._customerType = type;
  }

  setCustomerName(name) {
    this._customerName = name;
  }

  setCustomerType(type) {
    this._customerType = type;
  }

  setCustomerID(id) {
    this._customerID = id;
  }

  getCustomerName() {
    return this._customerName;
  }

  getCustomerType() {
    return this._customerType;
  }

  getCustomerID() {
    return this._customerID;
  }
}
