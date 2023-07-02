import {delimetr, ARRAYS, message_results} from "./utils.js"
import {ft_difference} from "../ft_difference.js"

function test_ft_difference() {
  delimetr("FT_DIFFERENCE");

  const flagsResult = ARRAYS.map((element) => {
    return _.isEqual(ft_difference(element, [4, 2, 1]), _.difference(element, [4, 2, 1]))
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

export {test_ft_difference}
