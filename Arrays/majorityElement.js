let nums = [3,2,3];
let nums1 = [2,2,1,1,1,2,2]
function majorityElement(nums){
    // Hasp map
    let count = {};

    for(let num of nums){
        count[num] = (count[num] || 0) + 1;
        if(count[num] > nums.length / 2){
            console.log(num)
            return num
        }
    }
}

majorityElement(nums1)