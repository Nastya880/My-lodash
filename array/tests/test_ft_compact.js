import {delimetr, ARRAYS, message_results} from "./utils.js"
import {ft_compact} from "../ft_compact.js"

function test_ft_compact() {
  delimetr("FT_COMPACT");

  const flagsResult = ARRAYS.map((element) => {
    // console.log(`for [${element}] my compact ${ft_compact(element)}`);
    // console.log(`for [${element}] original compact ${_.compact(element)}`);
    return _.isEqual(ft_compact(element), _.compact(element))
  });

  let numberResultTrue = 0;
  let numberResultFalse = 0;

  for (let i = 0; i < flagsResult.length; i++) {
    if (Number(flagsResult[i]))
      numberResultTrue++;
    else
      numberResultFalse++;
  }

  message_results(numberResultTrue, numberResultFalse);
}

export {test_ft_compact}
