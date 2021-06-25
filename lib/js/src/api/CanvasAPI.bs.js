'use strict';

var CanvasDoService$WonderEventmanager = require("../service/canvas/CanvasDoService.bs.js");
var ContainerManager$WonderEventmanager = require("../data/ContainerManager.bs.js");

function setCanvas(canvas) {
  return ContainerManager$WonderEventmanager.setPO(CanvasDoService$WonderEventmanager.setCanvas(canvas, ContainerManager$WonderEventmanager.getPO(undefined)));
}

exports.setCanvas = setCanvas;
/* ContainerManager-WonderEventmanager Not a pure module */
