function generateParenthesis(n,open,close,str){
    if(open + close === 2*n){
        console.log(str);
        return;
    }
    if(open < n){
        generateParenthesis(n,open + 1,close, str+"(")
    }
    if(close < open){
        generateParenthesis(n,open,close + 1,str+")")
    }
}
generateParenthesis(3,0,0,""); // open close start from 0