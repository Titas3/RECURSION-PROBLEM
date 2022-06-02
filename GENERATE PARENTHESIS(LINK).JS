var generateParanthesis = function (n) {
    let res = []; // To store the result
    let str = ""; // To store our string which is empty
    let open = 0; // To store count of open ‘(‘
    let close = 0; // To store count to close ‘)’
    backtrack(res, str, open, close, n); // Call the backtracking function
    console.log("result", res);
    return res; // return the result
  };
  
  function backtrack(res, str, open, close, n) {
    if (str.length === n * 2) {
      //terminating condition
      res.push(str);
      return;
    }
    if (open < n) {
      backtrack(res, str + "(", open + 1, close, n); // add “(“ to current string
      // and recursively call function
    }
    if (close < open) {
      backtrack(res, str + ")", open,close+1, n); // add “)” to current string
      // and recursively call function
    }
  }
  generateParanthesis(3);
  