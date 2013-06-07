_ = require("underscore")._;

var Store = function(app){

  var self = this;


  self.orders = [
    {
      number : "12345",
      description : "Foot Massage",
      price : 12000000,
      customer : "rob@tekpub.com"
    },
    {
      number : "6789",
      description : "Invaluable Knowledge",
      price : 5000000,
      customer : "rob@tekpub.com"
    },
    {
      number : "RRPPRORL",
      description : "Perpetual Motion Monkey",
      price : 5000000,
      customer : "rob@tekpub.com"
    },
    {
      number : "XXXXXXX",
      description : "Tom Dale's Camera Noir Photo ",
      price : 5,
      customer : "rob@tekpub.com"
    }
  ];


  app.post("/orders", function(req,res){
   self.orders.push(req.body);
  });

  app.put("/orders", function(req,res){
    //find the order for this
    var number = req.body.number;
    var found = _.find(self.orders, function(order){
      return order.number === number;
    });

    //take it out
    self.orders = _.without(self.orders, found);

    //put it back
    self.orders.push(req.body);


  });
  app.get("/orders", function(req, res){
    res.json(self.orders);
  });

};


module.exports = Store;