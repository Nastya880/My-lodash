import {delimetr, ARRAYS, message_results} from "./utils.js"
import {ft_dropRight} from "../ft_dropRight.js"

function test_ft_dropRight() {
  delimetr("FT_DROPRIGHT");

  const flagsResult = ARRAYS.map((element) => {
    return _.isEqual(ft_dropRight(element, 2), _.dropRight(element, 2))
  });
  console.log(flagsResult);
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

export {test_ft_dropRight}
