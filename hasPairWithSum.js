const hasPairWithSum2 = (arr, sum) => {
  let set = new Set;
  for (let number of arr) {
    if(set.has(number)) {
      return true;
    }
    set.add(sum - number)
  }

  return set;
}

hasPairWithSum2([6,6,3,2,1,4], 8)