exports.editor = function(req, res){
  var ot = require("ot");
  var session_id = req.params.id;
  var json = req.body;
  console.log(typeof json);
  console.log(json);
  var operation = ot.TextOperation.fromJSON(JSON.parse(json));
  console.log(operation);
  return res.send("");
  //return res.render("index", {"title": "editor"});
};
