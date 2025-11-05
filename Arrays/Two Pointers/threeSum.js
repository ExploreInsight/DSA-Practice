/**
 * This is the Optimized Version of 3Sum Problem using Two Pointers
 * Optimized Two-Pointer Solution for 3Sum
 * ---------------------------------------
 * Time Complexity: O(n²)
 * Space Complexity: O(1) (ignoring output)
 */

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate 'a'

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates for 'b' and 'c'
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}


/**
 * Formatted Soultion But it will execced the time limit on leetcode
 * As the time Complexity is O(n^3) i.e. for 3000 elements it means 27 billion operations 
 * Which is not fesaible in time limit of 1-2 seconds
 * Brute Force Solution for 3Sum Problem
 * --------------------------------------
 * Find all unique triplets [a, b, c] in the array such that:
 *      a + b + c === 0
 *
 * Time Complexity: O(n^3)
 * Space Complexity: O(n^2) (for result storage and duplicate removal)
 */

function threeSum(nums) {
  // Step 1: Sort the array to make duplicate handling easier
  nums.sort((a, b) => a - b);

  const result = [];

  // Step 2: Use three nested loops (brute-force)
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }

  // Step 3: Remove duplicate triplets
  // ✅ Method 1: Using Set + JSON.stringify
  const uniqueTriplets = Array.from(new Set(result.map(JSON.stringify))).map(JSON.parse);

  return uniqueTriplets;
}


// First Solution

/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets. */

let nums = [-1 , 0 ,1 , 2 , -1  , -4];

function threeSum(nums){

  nums.sort((a, b)=> a - b);
  console.log(nums);

  let result = [];
  // return triples i.e [a , b , c ] such that a + b + c = 0 and a , b , c are distinct elements
  for(let i = 0 ; i < nums.length ; i++){
    for(let j= i+1; j < nums.length; j++){
        for(let k = j+1; k< nums.length; k++){
            if(nums[i] + nums[j] + nums[k] === 0)  {
                console.log(nums[i], nums[j] , nums[k]);
                result.push([nums[i], nums[j] , nums[k]]);  // the solution still containes duplicates how to remove those 
            }
        }
    }
  }
  console.log(result);
  // how to remove duplicates from an array of arrays
//    should i use set ? will that work ? or should i use map ? dont know 
// or should i use filter or should i use a for loop to check if the array alerady conatins the dupicliates 
// result.filter((item , index) =>{
//     return result.indexOf(item) === index;
// } )

// let use a set i think for now 
let newSet = new Set(result.map(JSON.stringify));
console.log(newSet);

let newArr = Array.from(newSet).map(JSON.parse);

console.log(newArr)
  return newArr;
}

threeSum(nums);