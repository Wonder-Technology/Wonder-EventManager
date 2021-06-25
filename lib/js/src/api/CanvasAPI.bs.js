'use strict';

var CanvasDoService$WonderEventmanager = require("../service/dom/CanvasDoService.bs.js");
var ContainerManager$WonderEventmanager = require("../data/ContainerManager.bs.js");

function setCanvas(canvas) {
  return ContainerManager$WonderEventmanager.setPO(CanvasDoService$WonderEventmanager.setCanvas(ContainerManager$WonderEventmanager.getPO(undefined), canvas));
}

exports.setCanvas = setCanvas;
/* ContainerManager-WonderEventmanager Not a pure module */
