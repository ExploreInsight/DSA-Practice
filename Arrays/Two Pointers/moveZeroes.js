let nums = [0,1,0,3,12];

var moveZeroes = function(nums){
    let left = 0;

    for(let right = 0; right < nums.length; right++){
        if(nums[right] !==0){
            // swap nums[left] and nums[right]
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left ++
        }
        return nums;
    }
}