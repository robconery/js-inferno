var _ = require("underscore")._;
var api = require("./api");
var redis = require("redis").createClient();

var Store = function(app){

  var self = this;

  app.post("/orders", function(req,res){
   self.orders.push(req.body);
  });

  app.put("/orders", function(req,res){
    //find the order for this
    var number = req.body.number;
    var found = _.find(api.orders, function(order){
      return order.number === number;
    });

    //take it out
    self.orders = _.without(api.orders, found);

    //put it back
    self.api.orders.push(req.body);


  });
  app.get("/api", function(req, res){
    res.json(api);
  });
  app.get("/orders", function(req, res){
    res.json(api.orders);
  });
  app.get("/monkey", function(req,res){
    redis.get("monkey:name", function(err,val){
      res.json({name : val});
    });

  });
  app.post("/monkey", function(req,res){
    redis.set("monkey:name", req.body.name, function(result){
      res.json({name : req.body.name});
    });
  });
};


module.exports = Store;