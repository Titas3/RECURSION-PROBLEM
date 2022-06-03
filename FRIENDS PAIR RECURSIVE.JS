function friendsPair(n){
    if(n === 0 || n===1|| n===2)
    return n;
    return friendsPair(n-1) + (n-1)*friendsPair(n-2);
    
}
console.log(friendsPair(4));