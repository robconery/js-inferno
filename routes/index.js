
var Routes = function(app){

  app.get("/", function(req, res){
    res.render('index');
  });

  app.get("/list", function(req,res){
    res.render("list");
  });

  app.get("/angular/simple", function(req,res){
    res.render("angular_simple");
  });
  app.get("/angular/list", function(req,res){
    res.render("angular_list");
  });
  app.get("/angular/save", function(req,res){
    res.render("angular_save");
  });


  app.get("/backbone/simple", function(req,res){
    res.render("backbone_simple");
  });
  app.get("/backbone/list", function(req,res){
    res.render("backbone_list");
  });
  app.get("/backbone/save", function(req,res){
    res.render("backbone_save");
  });


  app.get("/knockout/simple", function(req,res){
    res.render("ko_simple");
  });
  app.get("/knockout/list", function(req,res){
    res.render("ko_list");
  });
  app.get("/knockout/save", function(req,res){
    res.render("ko_save");
  });

  app.get("/ember/simple", function(req,res){
    res.render("ember_simple");
  });
  app.get("/ember/list", function(req,res){
    res.render("ember_list");
  });
  app.get("/ember/save", function(req,res){
    res.render("ember_save");
  });
};



module.exports = Routes;

