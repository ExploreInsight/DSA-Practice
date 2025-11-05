/*
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 1. how to approch this problem
 * we can use two pointer approch here
 * 2. we can use one pointer to iterate through the array and another pointer to keep track of the position to place the next non-val element
 * 3. if the current element is not equal to val, we place it at the position of the second pointer and increment the second pointer
 * 4. finally we return the value of the second pointer as the new length of the array
 */
let nums = [0, 1, 2, 2, 3, 0, 4, 2],
  val = 2;

function removeElement(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    // current value is not equal to val it means its a pass to keep that value
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    } else {
      // if the current value is equal to val we skip that value
      continue;
    }
  }
  console.log(k);
  return k;
}

removeElement(nums, val);
