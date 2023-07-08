const merge = (left, right) => {
  const sortedArr = [];

  while (left.length && right.length) {
    if (left[0].timeInSec < right[0].timeInSec) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
};

export const sortArray = (arr) => {
  // base case
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  // recursion
  let left = sortArray(arr.slice(0, mid));
  let right = sortArray(arr.slice(mid));

  return merge(left, right);
};
