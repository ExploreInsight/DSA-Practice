/* 
these are the contraints for the problem 
nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200 */
let nums1 =[1,2,3,0,0,0];
let nums2 =[2,5,6];
let m = 3;
let n = 3;
function sortedArrays(nums1, m , nums2 , n){
    if(nums1.length !== m+n || nums2.length !==n) return "Invalid Input";
    let newArray = [];
    for(let i = 0; i < m; i++){
        newArray.push(nums1[i]);
    }
     for(let i = 0; i < n; i++){
        newArray.push(nums2[i])
    }
    newArray.sort((a,b)=> a -b);
    // return newArray;
    for (let i = 0; i < m + n; i++) {
        nums1[i] = newArray[i];
    }
    console.log(nums1)
}

sortedArrays(nums1, m , nums2 , n);


/* function sortedArrays(nums1, m, nums2, n) {
    if (nums1.length !== m + n || nums2.length !== n)
        return "Invalid Input";

    // let newArray = [...nums1.slice(0, m), ...nums2];
    // newArray.sort((a, b) => a - b);

    // Copy values back into nums1 (in place)
    for (let i = 0; i < m + n; i++) {
        nums1[i] = newArray[i];
    }
}
 */