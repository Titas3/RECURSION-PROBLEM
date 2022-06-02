function lexNumbers(n){
    var sol = [];
    dfs(1, n, sol);
    console.log("[" + sol[0]);
    for(let i =1; i<sol.length;i++)
    console.log("," + sol[i]);
    console.log("]")
}
function dfs(temp, n, sol){
    if(temp > n)
    return;
    sol.push(temp);
    dfs(temp * 10, n, sol);
    if(temp %10!=9)
    dfs(temp +1,n,sol);
}
let n= 15;
lexNumbers(n);
lexNumbers(19);