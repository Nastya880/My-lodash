import {delimetr, ARRAYS, message_results} from "./utils.js"
import {ft_flattenDepth} from "../ft_flattenDepth.js"

function test_ft_flattenDepth() {
  delimetr("FT_FLATTENDEPTH");

  const flagsResult = ARRAYS.map((element) => {
    return _.isEqual(ft_flattenDepth(element), _.flattenDepth(element))
  });

  let numberResultTrue = 0;
  let numberResultFalse = 0;

  for (let i = 0; i < flagsResult.length; i++) {
    if (flagsResult[i])
      numberResultTrue++;
    else
      numberResultFalse++;
  }

  message_results(numberResultTrue, numberResultFalse);
}

export {test_ft_flattenDepth}
