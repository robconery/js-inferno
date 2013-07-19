
var Routes = function(app){

  app.get("/", function(req, res){
    res.render('index');
  });

  app.get("/list", function(req,res){
    res.render("list");
  });

  app.get("angular/simple", function(req,res){
    res.render("angular/simple");
  });
  app.get("angular/list", function(req,res){
    res.render("angular/list");
  });
  app.get("angular/save", function(req,res){
    res.render("angular/save");
  });


  app.get("backbone/simple", function(req,res){
    res.render("backbone/simple");
  });
  app.get("backbone/list", function(req,res){
    res.render("backbone/list");
  });
  app.get("backbone/save", function(req,res){
    res.render("backbone/save");
  });


  app.get("knockout/simple", function(req,res){
    res.render("knockout/simple");
  });
  app.get("knockout/list", function(req,res){
    res.render("knockout/list");
  });
  app.get("knockout/save", function(req,res){
    res.render("knockout/save");
  });

  app.get("ember/simple", function(req,res){
    res.render("ember/simple");
  });
  app.get("ember/list", function(req,res){
    res.render("ember/list");
  });
  app.get("ember/save", function(req,res){
    res.render("ember/save");
  });
};



module.exports = Routes;

