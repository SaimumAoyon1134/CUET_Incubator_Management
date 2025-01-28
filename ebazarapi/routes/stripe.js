
const router = require("express").Router();
const Stripe= require("stripe"); // Use a different name for the Stripe package
const stripe = Stripe("sk_test_51QSOwkD8lygotTYmpYI3X66nsvgIFDMs9URNPLVYNNLIw3czS8UickP4G6xMlyirGPUrtdbbpbewCJOhgr4UFNU700i8rIFO6k"); // Initialize Stripe with the API key

router.post("/payment", (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
    }, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).json(stripeErr);
        } else {
            res.status(200).json(stripeRes);
        }
    });
});

module.exports = router;
