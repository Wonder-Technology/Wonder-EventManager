'use strict';

var Caml_option = require("rescript/lib/js/caml_option.js");
var Result$WonderEventmanager = require("../Result.bs.js");
var OptionSt$WonderEventmanager = require("../OptionSt.bs.js");

function collectOption(optionData1, optionData2, optionData3, optionData4) {
  if (optionData1 !== undefined && optionData2 !== undefined && optionData3 !== undefined && optionData4 !== undefined) {
    return Result$WonderEventmanager.succeed([
                Caml_option.valFromOption(optionData1),
                Caml_option.valFromOption(optionData2),
                Caml_option.valFromOption(optionData3),
                Caml_option.valFromOption(optionData4)
              ]);
  } else {
    return OptionSt$WonderEventmanager.buildFailResult(undefined);
  }
}

function collectResult(resultData1, resultData2, resultData3, resultData4) {
  return Result$WonderEventmanager.bind(resultData1, (function (data1) {
                return Result$WonderEventmanager.bind(resultData2, (function (data2) {
                              return Result$WonderEventmanager.bind(resultData3, (function (data3) {
                                            return Result$WonderEventmanager.mapSuccess(resultData4, (function (data4) {
                                                          return [
                                                                  data1,
                                                                  data2,
                                                                  data3,
                                                                  data4
                                                                ];
                                                        }));
                                          }));
                            }));
              }));
}

exports.collectOption = collectOption;
exports.collectResult = collectResult;
/* No side effect */
