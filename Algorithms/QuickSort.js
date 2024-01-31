function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Choose a pivot element
  const pivot = arr[Math.floor(arr.length / 2)];

  // Partition the array into two halves
  const left = arr.filter(element => element < pivot);
  const middle = arr.filter(element => element === pivot);
  const right = arr.filter(element => element > pivot);

  // Recursively sort the left and right halves
  return quickSort(left).concat(middle, quickSort(right));
}

// Example usage:
const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);
// console.log([...new Set(sortedArray)])
