var express = require("express");
var router = express.Router();
var path = require("path");


router.get("/:operator/:x/:y", function(req,res){
    console.log("post received: ", req.params.operator, "y: ", req.params.y, "x: ", req.params.x )
    var answer = 0;
    var y = parseFloat(req.params.y);
    var x = parseFloat(req.params.x);
    switch (req.params.operator) {
      case "add":
        answer =  y + x
        break;
      case "subtract":
        answer = y - x;
        break;
      case "divide":
        answer = y / x;
        break;
      case "multiply":
        answer = y * x;
        break;
      };
    res.send({response: answer});
});

module.exports = router;
