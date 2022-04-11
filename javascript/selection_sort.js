//let sortedArr = []; - for recurssion
function selectionSort(arr) {
  let sortedArr = [];
  // type your code here
  //let min = arr[0];
  
  // for (let i = 0; i < arr.length; i++) {
  //   if (min > arr[i]) {
  //     min = arr[i]
  //   }
  // }
  //or
  // let min = Math.min(...arr);
  //with recurssion 
  // let index = arr.indexOf(min);
  // arr.splice(index, 1);
  // sortedArr.push(min);
  
  // if (arr.length !== 1)
  //   selectionSort(arr);
  // else
  //   sortedArr.push(arr[0]);

    //or
    while(arr.length !== 0) {
      let min = Math.min(...arr);
      let index = arr.indexOf(min);
      arr.splice(index, 1);
      sortedArr.push(min);
    } 
return sortedArr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5,3, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
