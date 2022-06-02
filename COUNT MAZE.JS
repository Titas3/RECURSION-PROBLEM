function countMaze(m,n){
    if(n < 0 || m< 0)
    return 0;
    if(n==1 && m== 1){
        return 1;
    }
    return countMaze(m-1,n) + countMaze(m,n-1);   
}
console.log(countMaze(2,3));
