function permutation(str, l, r) {
  if (l == r) {
    console.log(str);
    return;
  } else {
    for (let i = l; i <= r; i++) {
      permutation(swap(str, i, l), l + 1, r);
    }
  }
}
function swap(str, i, j) {
  str = str.split("");
  let temp = str[i];
  str[i] = str[j];
  str[j] = temp;
  return str.join("");
}
permutation("ABC", 0, 2);
