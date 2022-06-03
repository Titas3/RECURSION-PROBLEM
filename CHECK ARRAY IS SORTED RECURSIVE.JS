function isSorted (arr,i){
    if(i=== arr.length - 1)
    return true;
    let check = isSorted(arr,i+1);
    return check && arr[i] <= arr[i+1];
}
let arr = [5,6,4,9,3,2];
console.log(isSorted(arr,0));