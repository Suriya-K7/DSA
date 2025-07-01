let arr = [2, 7, 11, 15];
let target = 9;

function twoSumBruteForce(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}

function twoSumUsingObj(arr, target) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let reminder = target - arr[i];

    if (arr[obj[reminder]] === reminder) {
      return [obj[reminder], i];
    } else {
      obj[arr[i]] = i;
    }
  }
}

function twoSumUsingMap(arr, target) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let reminder = target - arr[i];

    if (map.has(reminder)) {
      return [map.get(reminder), i];
    } else {
      map.set(arr[i], i);
    }
  }
}
console.log("twoSumBruteForce - ", twoSumBruteForce(arr, target));

console.log("twoSumUsingObj - ", twoSumUsingObj(arr, target));

console.log("twoSumUsingMap - ", twoSumUsingMap(arr, target));
