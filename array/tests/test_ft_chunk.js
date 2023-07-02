// import {DELIMETR, ARRAY_1, ARRAY_2, ARRAY_3, ARRAY_4} from "./utils.js"
import {delimetr, ARRAYS, message_results} from "./utils.js"
import {ft_chunk} from "../ft_chunk.js"

function test_ft_chunk() {
  delimetr("FT_CHUNK");
  const flagsResult = ARRAYS.map((element) => {
    return _.isEqual(ft_chunk(element, 8), _.chunk(element, 8))
  });

  let numberResultTrue = 0;
  let numberResultFalse = 0;
  // console.log(flagsResult.includes(true));

  for (let element in flagsResult) {
    if (element) {
      numberResultTrue++;
      continue ;
    }
    numberResultFalse++;
  }

  message_results(numberResultTrue, numberResultFalse);
}

export {test_ft_chunk}
