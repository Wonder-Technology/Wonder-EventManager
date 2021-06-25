'use strict';

var ContainerManager$WonderEventmanager = require("../data/ContainerManager.bs.js");
var InitEventDoService$WonderEventmanager = require("../service/init_event/InitEventDoService.bs.js");

function initEvent(param) {
  return ContainerManager$WonderEventmanager.setPO(InitEventDoService$WonderEventmanager.initEvent(ContainerManager$WonderEventmanager.getPO(undefined)));
}

exports.initEvent = initEvent;
/* ContainerManager-WonderEventmanager Not a pure module */
