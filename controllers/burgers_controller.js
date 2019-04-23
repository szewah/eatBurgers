//controller

let express = require("express");
let router = express.Router();
let bigBurger = require("../models/burger");

console.log(bigBurger);

router.get("/", function(req, res) {
    bigBurger.selectAll(function(data) {
        var hbsBurgerObject = {
            burgers: data
        };
        // console.log(hbsBurgerObject);
        res.render("index", hbsBurgerObject);
    });
});

router.post("/", function(req, res, next) {
    bigBurger.insertOne(req.body.burger_name, function(err, result) {
        // console.log(req.body)
        if (err) next(err);
        res.redirect("/");
    })
});

router.put("/:id", function(req, res, next) {
    console.log("REQUEST", req.params.id);
    let itemID = req.params.id;

    bigBurger.updateOne(itemID, function(err, result) {
        if (err) next(err);
        res.redirect("/");
    })
});

router.delete("/:id", function(req, res, next) {
    let itemID = req.params.id;

    bigBurger.deleteOne(itemID, function(err, results) {
        if (err) next(err);
        res.redirect("/");
    })
});


module.exports = router;