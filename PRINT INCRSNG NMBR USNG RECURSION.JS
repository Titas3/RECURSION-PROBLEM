
// print no's from 1..10

function printTillN(n) {
    if(n === 1) {
        console.log(1);
        return;
    }
    console.log(n); // pre-recursive.
    printTillN(n-1);
    console.log(n); // post-recursive.
}

printTillN(10);