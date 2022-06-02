function printSubsequence(arr,index,result){
    if(arr.length === index){
        console.log(result);
    } else {
    printSubsequence(arr, index+1, result)// excluding
    result.push(arr[index]); //  including
    printSubsequence(arr, index+1, result)  // including
    result.pop();
}

return;
}
let arr = [1,2,3];
let result = [];
printSubsequence(arr, 0, result);