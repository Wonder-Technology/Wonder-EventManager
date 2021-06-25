'use strict';

var CanvasDoService$WonderEventmanager = require("../service/canvas/CanvasDoService.js");
var ContainerManager$WonderEventmanager = require("../data/ContainerManager.js");

function setCanvas(canvas) {
  return ContainerManager$WonderEventmanager.setPO(CanvasDoService$WonderEventmanager.setCanvas(canvas, ContainerManager$WonderEventmanager.getPO(undefined)));
}

exports.setCanvas = setCanvas;
/* ContainerManager-WonderEventmanager Not a pure module */
