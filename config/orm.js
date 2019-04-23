//orm => models
let connection = require("./connection");

let orm = {
    //Orm method making an inquiry on the entire table
    selectAll: function(cb) {
        let queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) console.error(err);
            cb(result);
        });
    },

    insertOne: function(burger, cb) {
        let queryString = `INSERT INTO burgers (burger_name) VALUES ("${burger}")`;
        connection.query(queryString, function(err, result) {
            if (err) console.err(err);
            cb(null, result);
        });
    },
    updateOne: function(id, cb) {
        let queryString = `UPDATE burgers SET devoured = true WHERE id = "${id}"`;
        connection.query(queryString, function(err, result) {
            if (err) console.error(err);
            cb(result);
        });
    },
    deleteOne: function(id, cb) {
        let queryString = `DELETE FROM burgers WHERE id = "${id}"`;
        connection.query(queryString, function(err, result) {
            if (err) console.error(err);
            cb(result);
        });
    }
};


module.exports = orm