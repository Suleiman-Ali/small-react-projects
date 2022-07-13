import { Customer } from "./customer.js";

export class CustomerBulider {
  constructor(id, name, type) {
    this._customer = new Customer(id, name, type);
  }

  bulid() {
    return this._customer;
  }
}
