import {delimetr, ARRAYS, message_results} from "./utils.js"
import {ft_differenceBy} from "../ft_differenceBy.js"

function test_ft_differenceBy() {
  delimetr("FT_DIFFERENCEBY");

  const flagsResult = ARRAYS.map((element) => {
    return _.isEqual(ft_differenceBy(element, [4, 2, 1]), _.differenceBy(element, [4, 2, 1]))
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

export {test_ft_differenceBy}
