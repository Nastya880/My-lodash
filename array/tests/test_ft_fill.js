import {delimetr, ARRAYS, message_results} from "./utils.js"
import {ft_fill} from "../ft_fill.js"

function test_ft_fill() {
  delimetr("FT_FILL");

  const flagsResult = ARRAYS.map((element) => {
    return _.isEqual(ft_fill(element, "-", 1, 2), _.fill(element, "-", 1, 2))
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

export {test_ft_fill}
