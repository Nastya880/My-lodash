import {delimetr, ARRAYS, message_results} from "./utils.js"
import {ft_findIndex} from "../ft_findIndex.js"

function test_ft_findIndex() {
  delimetr("FT_FINDINDEX");

  const sum =  (element) => element === 1;

  const flagsResult = ARRAYS.map((element) => {
    return _.isEqual(ft_findIndex(element, sum, 1), _.findIndex(element, sum, 1))
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

export {test_ft_findIndex}
