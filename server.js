let express = require("express");
let methodOverride = require('method-override');
let PORT = process.env.PORT || 8000;
let app = express();




// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//
app.use(methodOverride("_method"));

//Set Handlebars
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Set the routes
let routes = require("./controllers/burgers_controller");

app.use(routes);

//Start the server
app.listen(PORT, function() {
    console.log("App now listening at http://localhost:" + PORT);
});