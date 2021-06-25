'use strict';

var ListSt$WonderEventmanager = require("./ListSt.js");
var Result$WonderEventmanager = require("./Result.js");

function mergeResults(resultList) {
  return ListSt$WonderEventmanager.reduce(resultList, Result$WonderEventmanager.succeed(undefined), (function (mergedResult, result) {
                return Result$WonderEventmanager.bind(mergedResult, (function (param) {
                              return result;
                            }));
              }));
}

exports.mergeResults = mergeResults;
/* No side effect */
