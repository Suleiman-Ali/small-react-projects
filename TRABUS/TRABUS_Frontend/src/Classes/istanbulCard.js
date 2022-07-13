import { Card } from "./card.js";

export class IstanbulCard extends Card {
  constructor(id, customer, balance, type) {
    super(customer, id, type);
    this._balance = balance;
  }

  setBalance(balance) {
    this._balance = balance;
  }

  getBalance() {
    return this._balance;
  }

  _busFullFareOperate(transferNumber) {
    if (transferNumber > 6 || transferNumber < 0) return;
    else if (transferNumber === 0) this._balance -= 2.6;
    else if (transferNumber === 1) this._balance -= 1.85;
    else if (transferNumber === 2) this._balance -= 1.4;
    else if (transferNumber === 3) this._balance -= 0.9;
    else if (transferNumber === 4) this._balance -= 0.9;
    else if (transferNumber === 5) this._balance -= 0.9;
  }

  _busTeacherOperate(transferNumber) {
    if (transferNumber > 6 || transferNumber < 0) return;
    else if (transferNumber === 0) this._balance -= 1.85;
    else if (transferNumber === 1) this._balance -= 1.1;
    else if (transferNumber === 2) this._balance -= 0.85;
    else if (transferNumber === 3) this._balance -= 0.55;
    else if (transferNumber === 4) this._balance -= 0.55;
    else if (transferNumber === 5) this._balance -= 0.55;
  }

  _busStudentOperate(transferNumber) {
    if (transferNumber > 6 || transferNumber < 0) return;
    else if (transferNumber === 0) this._balance -= 1.25;
    else if (transferNumber === 1) this._balance -= 0.55;
    else if (transferNumber === 2) this._balance -= 0.5;
    else if (transferNumber === 3) this._balance -= 0.45;
    else if (transferNumber === 4) this._balance -= 0.45;
    else if (transferNumber === 5) this._balance -= 0.45;
  }

  _metroBusFullFareOperate(numberOfStops) {
    if (numberOfStops < 1) return;
    else if (numberOfStops >= 1 && numberOfStops <= 3) this._balance -= 1.95;
    else if (numberOfStops >= 4 && numberOfStops <= 9) this._balance -= 3;
    else if (numberOfStops >= 10 && numberOfStops <= 15) this._balance -= 3.25;
    else if (numberOfStops >= 16 && numberOfStops <= 21) this._balance -= 3.4;
    else if (numberOfStops >= 22 && numberOfStops <= 27) this._balance -= 3.5;
    else if (numberOfStops >= 28 && numberOfStops <= 33) this._balance -= 3.6;
    else if (numberOfStops > 33) this._balance -= 3.85;
  }

  _metroBusTeacherOperate(numberOfStops) {
    if (numberOfStops < 1) return;
    else if (numberOfStops >= 1 && numberOfStops <= 3) this._balance -= 1.45;
    else if (numberOfStops >= 4 && numberOfStops <= 9) this._balance -= 1.85;
    else if (numberOfStops >= 10 && numberOfStops <= 15) this._balance -= 1.9;
    else if (numberOfStops >= 16 && numberOfStops <= 21) this._balance -= 2;
    else if (numberOfStops >= 22 && numberOfStops <= 27) this._balance -= 2;
    else if (numberOfStops >= 28 && numberOfStops <= 33) this._balance -= 2.1;
    else if (numberOfStops > 33) this._balance -= 2.1;
  }

  _metroBusStudentOperate(numberOfStops) {
    if (numberOfStops < 1) return;
    else if (numberOfStops >= 1 && numberOfStops <= 3) this._balance -= 1.1;
    else if (numberOfStops >= 4 && numberOfStops <= 9) this._balance -= 1.2;
    else if (numberOfStops >= 10 && numberOfStops <= 15) this._balance -= 1.25;
    else if (numberOfStops >= 16 && numberOfStops <= 21) this._balance -= 1.25;
    else if (numberOfStops >= 22 && numberOfStops <= 27) this._balance -= 1.25;
    else if (numberOfStops >= 28 && numberOfStops <= 33) this._balance -= 1.25;
    else if (numberOfStops > 33) this._balance -= 1.25;
  }

  bus(transferNumber) {
    const customerType = this._customer.getCustomerType();
    // prettier-ignore
    if (customerType === "Full Fare") return this._busFullFareOperate(transferNumber);
    // prettier-ignore
    if (customerType === "Teacher") return this._busTeacherOperate(transferNumber);
    // prettier-ignore
    if (customerType === "Student") return this._busStudentOperate(transferNumber);
  }

  metroBus(numberOfStops) {
    const customerType = this._customer.getCustomerType();
    // prettier-ignore
    if (customerType === "Full Fare") return this._metroBusFullFareOperate(numberOfStops);
    // prettier-ignore
    if (customerType === "Teacher") return this._metroBusTeacherOperate(numberOfStops);
    // prettier-ignore
    if (customerType === "Student") return this._metroBusStudentOperate(numberOfStops);
  }
}
