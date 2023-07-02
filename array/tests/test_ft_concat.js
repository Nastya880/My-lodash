import {delimetr, ARRAYS, message_results} from "./utils.js"
import {ft_concat} from "../ft_concat.js"

function test_ft_concat() {
  delimetr("FT_CONCACT");

  const flagsResult = ARRAYS.map((element) => {
    return _.isEqual(ft_concat(element), _.concat(element))
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

export {test_ft_concat}
