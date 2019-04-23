//model => controller

let orm = require("../config/orm");

let burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    insertOne: function(burger, cb) {
        orm.insertOne(burger, function(res) {
            cb(res);
        });
    },
    updateOne: function(id, cb) {
        orm.updateOne(id, function(res) {
            console.log("This is the id number", id);
            cb(res);
        });
    },

    deleteOne: function(cb) {
        orm.deleteOne(function(res) {
            cb(res);
        });
    }
};

module.exports = burger;