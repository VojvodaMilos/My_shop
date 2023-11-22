const express = require("express");
const sendMail = require("../service/mailService");
const mailRoute = express.Router();

mailRoute.post("/send-contact", async (req, res) => {
  const body = req.body;
  try {
    await sendMail(body.email, "vojvoda1988@gmail.com", body.subject, body.message);
    res.send("Message send.");
  } catch (error) {
    res.status(415).send(error);
  }
});

module.exports = mailRoute;
