'use strict';

var BodyDoService$WonderEventmanager = require("../service/dom/BodyDoService.bs.js");
var ContainerManager$WonderEventmanager = require("../data/ContainerManager.bs.js");

function setBody(body) {
  return ContainerManager$WonderEventmanager.setPO(BodyDoService$WonderEventmanager.setBody(ContainerManager$WonderEventmanager.getPO(undefined), body));
}

exports.setBody = setBody;
/* ContainerManager-WonderEventmanager Not a pure module */
