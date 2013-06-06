
var ot = require("ot");
var Doc = function(sessionId){
  this.sessionId = sessionId;
  this.server = new ot.Server("");
  this.onReceive = function(json){
    
  }
  this.broadcast = function(){
    //Todo: push data to MongoDB
  }
}
var docs = {};
exports.editor = function(req, res){
  var sessionId = req.params.id;
  var json = req.body;
  
  if(docs[sessionId] === undefined ) {
    docs[sessionId] = new Doc();
  }

  //broadcast 
  return res.send(docs);
  //return res.render("index", {"title": "editor"});
};
