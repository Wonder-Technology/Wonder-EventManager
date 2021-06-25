'use strict';

var Container$WonderEventmanager = require("./container/Container.bs.js");

function getPO(param) {
  return Container$WonderEventmanager.poContainer.po;
}

function setPO(po) {
  Container$WonderEventmanager.poContainer.po = po;
  
}

exports.getPO = getPO;
exports.setPO = setPO;
/* Container-WonderEventmanager Not a pure module */
