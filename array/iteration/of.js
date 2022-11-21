const error = {RangeError: Maximum call stack size exceeded}
// This happens when the code below is writen

for (let num in arr) {
    const rem = target - num
    const remComb = bestSum(rem,arr)
    if (remComb !== null) {
      const regComb = [...remComb,num]
      if (shortestComb === null || regComb.length < shortestComb.length) {
        shortestComb = regComb
      }

    }
  }

// This happens because we will get the indices of the array and not the element 

// to solve this , we make use of 
for (let num of arr) {
    const rem = target - num
    const remComb = bestSum(rem,arr)
    if (remComb !== null) {
      const regComb = [...remComb,num]
      if (shortestComb === null || regComb.length < shortestComb.length) {
        shortestComb = regComb
      }

    }
  }

// change the in to of
