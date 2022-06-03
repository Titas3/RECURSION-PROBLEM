function fabonacci(n) {
    if( n === 0 || n === 1) {
        return n;
    }
    return fabonacci(n-2) + fabonacci(n-1);
}
console.log(fabonacci(7))