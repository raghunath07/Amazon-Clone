const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51HVg0JJinVQaEO0jJ2jeyvLaedntS9KESNKkvT0qTv06xUOW71C4Eo5jkhSlvIEcxiXR2ilgqMc01v9rPVxfbegY00EHajx4VD')

// - API

// - App config

const app = express();

// - Middleware

app.use(cors({origin:true}));
app.use(express.json());

// - API routes
app.get('/',(req,res) => res.status(200).send('hello raghu'))

http://localhost:5001/store-clone-b2501/us-central/api/payments/create?total=0

app.post('/payments/create',async(req,res) => {
    const total = req.query.total;

    console.log('Payment Request Recieved >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency: "INR"
        })

    res.status(201).send({
        clientSecret : paymentIntent.client_secret
    });

})

// - Listen command
exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
