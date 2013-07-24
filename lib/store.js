var _ = require("underscore")._;
var api = require("./api");
var redis = require("redis").createClient();

var Store = function(app){

  var self = this;
  app.get("/api", function(req, res){
    res.json(api);
  });
  app.get("/orders", function(req, res){
    res.json(api.orders);
  });

  app.get("/coupon", function(req,res){
    redis.get("coupon:code", function(err,val){
      res.json({code : val});
    });

  });
  app.post("/coupon", function(req,res){
    redis.set("coupon:code", req.body.code, function(result){
      res.json({code : req.body.code});
    });
  });
};


module.exports = Store;