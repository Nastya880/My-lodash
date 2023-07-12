import {delimetr} from "/array/tests/utils.js"
import {ft_defaults} from "../ft_defaults.js"

function test_ft_defaults() {
  delimetr("FT_DEFAULTS");
  
  if (_.isEqual(ft_defaults({ a: 1 }, { b: 2 }, { a: 3 }), _.defaults({ a: 1 }, { b: 2 }, { a: 3 }))) {
    console.log('Number of tests with TRUE results = 1');
    console.log('Number of tests with FALSE results = 0');
  }
  else {
    console.log('Number of tests with FALSE results = 1');
    console.log('Number of tests with TRUE results = 0');
  }
}

export {test_ft_defaults}
