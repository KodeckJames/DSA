// In Big O notation, constant time is O(1)
// Constant time complexity
// S- O(1) T-O(1)
const toFahrenheit = (degreeCelsius: number): number => {
  return 1.8 * degreeCelsius + 32
}

// Linear Time i.e. - Both space and time depend on the input
// S - O(1) T - O(n)
const logNumbers = (numbersArray: number[]) => {
  //   let arr: number[] = []
  for (let i = 0; i < numbersArray.length; i++) {
    console.log(numbersArray[i])
    //   arr.push(2 * i);
  }
}

// Quadratic time complexity
// S O(1)
// T O(n^2)
// Returning numbers in pairs e.g. [1,2,3]=> 1,1 , 1,2 , 1,3 , 2,1 , 2,2 , 2,3 , 3,1 , 3,2 , 3,3
const returnPairNumbers = (numbers: number[]) => {
  for (let i = 1; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      console.log(i, j)
    }
  }
}
returnPairNumbers([1, 2, 3, 4])
