import React from "react";
import ReactDOM from "react-dom";
import App from "./ui/App";
import "./css/index.css";
import { CardBulider } from "./Classes/cardBulider";
import { Customer } from "./Classes/customer";
import { BlueCard } from "./Classes/blueCard";
import { ElectronicCard } from "./Classes/electronicCard";
import { IstanbulCard } from "./Classes/istanbulCard";

ReactDOM.render(<App />, document.getElementById("root"));

// const blueCard = new CardBulider(1, "Blue Card", 200, 1, "Name", "Full Fare").bulid();
// // Above code produce Blue Card object that includes a Customer object.

// const istanbulCard = new CardBulider(1, "Istanbul Card", 200, 1, "Name", "Full Fare").bulid();
// // Above code produce Istanbul Card object that includes a Customer object.

// const electronicCard = new CardBulider(1, "Electronic Card", 200, 1, "Name", "Full Fare").bulid();
// // Above code produce Electronic Card object that includes a Customer object.

// const customer = new Customer(1, "Name", "Full Fare");
// const blueCard = new BlueCard(1, customer, 200, "Blue Card");
// const electronicCard = new ElectronicCard(1, customer, 200, "Electronic Card");
// const istanbulCard = new IstanbulCard(1, customer, 200, "Istanbul Card");

// // As you see above, If I don't use the Bulider Design Pattern
// // I would have to the call constrctor function of each card according to its type
// // whenever i need to creaet a card object,
// // and that is a problem since mixing all this with the complex logic of the UI
// // can make the code totally unclean, and that could cause a lot of errors
// // whereas when using the Bulider Design Pattern,
// // all the cards can be create using one constrctor function
// // which is a very good thing since it makes the code cleaner and it sperates the Classes logic from the UI Logic
