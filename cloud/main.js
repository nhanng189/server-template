'use strict';

Parse.Cloud.define("helloserver", function (request, response) {
  console.log("console log ne");
  response.success("ahihidongok!");
});