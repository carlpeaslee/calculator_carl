var express = require("express");
var app = express();
var index = require("./routes/index");
var math = require("./routes/math");
var path = require("path");

app.set("port", (process.env.PORT || 5000));

app.use("/math", math);
app.use("/", index);


app.listen(app.get("port"), function(){
    console.log("Listening on port: ", app.get("port"));
});
