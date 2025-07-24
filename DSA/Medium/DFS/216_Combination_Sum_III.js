function combinationSum3(k, n) {
  let output = [];

  function dfs(index, cur) {
    if (cur.length === k && sum(cur) === n) {
      output.push([...cur]);
      return;
    }

    for (let i = index; i <= 9; i++) {
      cur.push(i);
      dfs(i + 1, cur);
      cur.pop();
    }
  }

  dfs(1, []);

  return output;
}

function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

let n = 7;
let k = 3;
console.log(combinationSum3(k, n));

n = 9;
k = 3;
console.log(combinationSum3(k, n));

n = 18;
k = 2;
console.log(combinationSum3(k, n));
