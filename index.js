

function mergeSort(array){
//until the array's length is equal to or less than 1
 if (array.length <= 1) return array;
 //find the midpoint of the array to split the array in half
 let mid = Math.floor(array.length/2); 
 //split the array into left and right sides
 //call mergeSort to keep spliting the array until the base case is reached
 let left = mergeSort(array.slice(0, mid));
 console.log(left)
 let right = mergeSort(array.slice(mid));
console.log(right)
//call helper function merge to take in the arrays and merge them together
 return merge(left,right)
}

mergeSort([10,74,27,73])



//used for already sorted arrays 
function merge(arr1, arr2){
  let array = []; 

//make two pointers 
  let i = 0;
  let j = 0;

//while the pointers are less than the length of the array
  while (i < arr1.length && j < arr2.length){
    if(arr2[j] > arr1[i]){
      //check to see if the value at i is less than the value at j
      //it is is, push into array 
      //increase pointer
      array.push(arr1[i]); 
      i++
      //if not, push value of j into the array and increase the pointer of j
    } else {
      array.push(arr2[j])
      j++
    }
  }
  //take care to push the other numbers into the array as well
  while(i < arr1.length){
    array.push(arr1[i])
    i++
  }
  while(j < arr2.length){
    array.push(arr2[j])
    j++
  }
  //voila! sorted array!
  return array;
}


