import { Card } from "./card.js";

export class ElectronicCard extends Card {
  constructor(id, customer, points, type) {
    super(customer, id, type);
    this._points = points;
  }

  setPoints(points) {
    this._points = points;
  }

  getPoints() {
    return this._points;
  }

  bus(transferNumber) {
    if (transferNumber < 0 && transferNumber > 5) return;
    else if (transferNumber === 0) this._points--;
    else if (transferNumber === 1) this._points--;
    else if (transferNumber === 2) this._points--;
    else if (transferNumber === 3) this._points--;
    else if (transferNumber === 4) this._points--;
    else if (transferNumber === 5) this._points--;
  }

  metroBus(numberOfStops) {
    if (numberOfStops < 1) return;
    else if (numberOfStops >= 1 && numberOfStops <= 3) this._points--;
    else if (numberOfStops >= 4 && numberOfStops <= 9) this._points -= 2;
    else if (numberOfStops >= 10 && numberOfStops <= 15) this._points -= 2;
    else if (numberOfStops >= 16 && numberOfStops <= 22) this._points -= 2;
    else if (numberOfStops >= 23 && numberOfStops <= 27) this._points -= 2;
    else if (numberOfStops >= 28 && numberOfStops <= 33) this._points -= 2;
    else if (numberOfStops > 33) this._points -= 2;
  }
}
