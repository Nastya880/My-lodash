import {delimetr, ARRAYS, message_results} from "./utils.js"
import {ft_differenceWith} from "../ft_differenceWith.js"

function test_ft_differenceWith() {
  delimetr("FT_DIFFERENCEWITH");

  const  comparator = (a, b) => {
    return a - b;
  }
  const flagsResult = ARRAYS.map((element) => {
    return _.isEqual(ft_differenceWith(element, [4, 2, 1], comparator), _.differenceWith(element, [4, 2, 1], comparator))
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

export {test_ft_differenceWith}
