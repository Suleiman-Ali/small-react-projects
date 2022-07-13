const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  _customerID: Number,
  _customerName: String,
  _customerType: String,
});

const cardSchema = new mongoose.Schema({
  _cardID: Number,
  _customer: customerSchema,
  _cardMoney: Number,
  _cardType: String,
});

const Card = mongoose.model("Card", cardSchema);

// NOTE Get all Cards
router.get("/", async (req, res) => {
  const cards = await Card.find();
  res.send(cards);
});

// NOTE Get specific Card
router.get("/:id", async (req, res) => {
  const card = await Card.findOne({ _cardID: req.params.id });

  if (!card)
    return res.status(404).send(`Card with ID ${req.params.id} not found.`);

  res.send(card);
});

// NOTE Upload a Card
router.post("/", async (req, res) => {
  let card = new Card({
    _cardID: req.body._cardID,
    _customer: req.body._customer,
    _cardMoney: req.body._cardMoney,
    _cardType: req.body._cardType,
  });

  card = await card.save();
  res.send(card);
});

// NOTE Update a Card
router.put("/:id", async (req, res) => {
  const card = await Card.findOneAndUpdate(
    { _cardID: req.params.id },
    {
      _cardID: req.body._cardID,
      _customer: req.body._customer,
      _cardMoney: req.body._cardMoney,
      _cardType: req.body._cardType,
    }
  );

  if (!card)
    return res.status(404).send(`Card with ID ${req.params.id} not found.`);

  res.send(card);
});

// NOTE Delete a Card
router.delete("/:id", async (req, res) => {
  const card = await Card.findOneAndDelete({ _cardID: req.params.id });

  if (!card)
    return res.status(404).send(`Card with ID ${req.params.id} not found.`);

  res.send(card);
});

module.exports = router;
