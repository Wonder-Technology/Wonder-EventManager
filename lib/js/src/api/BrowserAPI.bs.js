'use strict';

var BrowserDoService$WonderEventmanager = require("../service/browser/BrowserDoService.bs.js");
var ContainerManager$WonderEventmanager = require("../data/ContainerManager.bs.js");

function setBrowser(browser) {
  return ContainerManager$WonderEventmanager.setPO(BrowserDoService$WonderEventmanager.setBrowser(ContainerManager$WonderEventmanager.getPO(undefined), browser));
}

exports.setBrowser = setBrowser;
/* ContainerManager-WonderEventmanager Not a pure module */
