
 var fs = require("fs");
fs.readFile("phonegap_setup.doc", "utf8", function(error, data) {
  console.log(data);
});