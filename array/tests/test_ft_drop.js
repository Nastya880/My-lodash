import {delimetr, ARRAYS, message_results} from "./utils.js"
import {ft_drop} from "../ft_drop.js"

function test_ft_drop() {
  delimetr("FT_DROP");

  const flagsResult = ARRAYS.map((element) => {
    return _.isEqual(ft_drop(element, 3), _.drop(element, 3))
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

export {test_ft_drop}
