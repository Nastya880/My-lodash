import {delimetr, ARRAYS, message_results} from "./utils.js"
import {ft_flatten} from "../ft_flatten.js"

function test_ft_flatten() {
  delimetr("FT_FLATTEN");

  const sum =  (element) => element === 1;

  const flagsResult = ARRAYS.map((element) => {
    return _.isEqual(ft_flatten(element), _.flatten(element))
  });
  // console.log(flagsResult);
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

export {test_ft_flatten}
