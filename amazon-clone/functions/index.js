const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
// eslint-disable-next-line max-len
    ""
);

// API
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API Routes
app.get("/", (request, response ) => response.status(200).send("hello"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total; //amount in subunits

  console.log('Payment Request Received >>>>', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "cad",
  });

  // created payment intent and ok status
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });

});

// Listen
exports.api = functions.https.onRequest(app);

//example endpoint
// http://localhost:5001/clone-b037a/us-central1/api