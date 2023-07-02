import {delimetr, ARRAYS, message_results} from "./utils.js"
import {ft_chunk} from "../ft_chunk.js"

function test_ft_chunk() {
  delimetr("FT_CHUNK");
  const flagsResult = ARRAYS.map((element) => {
    return _.isEqual(ft_chunk(element, 8), _.chunk(element, 8))
  });

  // flagsResult.push(ARRAYS.map((element) => {
  //   return _.isEqual(ft_chunk(element, 2), _.chunk(element, 2))
  // }));

  let numberResultTrue = 0;
  let numberResultFalse = 0;
  // console.log(flagsResult);

  for (let i = 0; i < flagsResult.length; i++) {
    if (Number(flagsResult[i]))
      numberResultTrue++;
    else
      numberResultFalse++;
  }

  message_results(numberResultTrue, numberResultFalse);
}

export {test_ft_chunk}
