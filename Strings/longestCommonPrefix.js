var longestCommonPrefix = function(strs) {
    // If the input array is empty, no common prefix exists
    if(strs.length === 0) return "";
    
    // Start by assuming the first word is the prefix
    let prefix = strs[0];  // "flower"
    
    // Compare this prefix with every other string in the array
    for(let i = 1; i < strs.length; i++){
        // Keep reducing the prefix until it matches the start of strs[i]
        while(strs[i].indexOf(prefix) !== 0){
            // Chop off the last character of prefix
            prefix = prefix.substring(0, prefix.length - 1);
            
            // If prefix becomes empty, that means no common prefix exists
            if(prefix === "") return "";
        }
    }
    // After comparing with all strings, whatever is left is the longest prefix
    return prefix;
};

// Example usage
let strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs)); // Output: "fl"


{/*

    Initialization

prefix = "flower"

First loop (i = 1, comparing with "flow")

Check if "flow" starts with "flower":

"flow".indexOf("flower") → -1 (not found at start).

Shrink prefix:

"flower" → "flowe"

"flow".indexOf("flowe") → -1

Shrink again → "flow"

"flow".indexOf("flow") → 0 ✅

So now prefix = "flow"

Second loop (i = 2, comparing with "flight")

Check if "flight" starts with "flow":

"flight".indexOf("flow") → -1

Shrink prefix:

"flow" → "flo"

"flight".indexOf("flo") → -1

Shrink again → "fl"

"flight".indexOf("fl") → 0 ✅

// "flight".indexOf("li")  // 1 → "li" starts at position 1 ("f[l][i]ght")
// "flight".indexOf("gh")  // 3 → "gh" starts at position 3 ("fli[gh]t")
// "flight".indexOf("z")   // -1 → "z" does not exist
// "flight".indexOf("fl")  // 0 → because it matches from the beginning

So now prefix = "fl"

End of loop

No more strings to check.

Final prefix = "fl"

    */}