import {delimetr, ARRAYS, message_results} from "./utils.js"
import {ft_flattenDeep} from "../ft_flattenDeep.js"

function test_ft_flattenDeep() {
  delimetr("FT_FLATTENDEEP");

  const flagsResult = ARRAYS.map((element) => {
    return _.isEqual(ft_flattenDeep(element), _.flattenDeep(element))
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

export {test_ft_flattenDeep}
