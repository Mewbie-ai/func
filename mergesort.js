function mergeSort(n) {
  if (n.length < 2) {
    return n;
  }
  var mid = Math.floor(n.length / 2);
  var left = n.slice(0, mid);
  var right = n.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}

console.log(mergeSort([5, 3, 8, 2, 1, 4, 7, 6]));
