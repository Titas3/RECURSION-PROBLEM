function tilingProblem(n){
    if(n === 1 || n === 2|| n === 0 ){
        return n;
    } else{
        return tilingProblem(n-1) + tilingProblem(n-2);
    }
}
console.log(tilingProblem(3));