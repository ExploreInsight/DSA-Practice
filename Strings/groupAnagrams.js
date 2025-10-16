/**
 * 🧩 Problem: Group Anagrams
 * --------------------------
 * Given an array of strings, group all the anagrams together.
 *
 * Example:
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
 *
 * ✅ Two Different Approaches:
 *    1. Sorting-Based Key  (simpler to understand)
 *    2. Character Count Key (faster for longer strings)
 */


/* --------------------------------------------------
 * 🧠 1️⃣ Sorting-Based Approach
 * --------------------------------------------------
 * Idea:
 *  - Sort the letters in each word alphabetically.
 *  - All anagrams share the same sorted version.
 *  - Use this sorted string as a key in a hashmap.
 *
 * Time Complexity: O(N × L log L)
 *   - N = number of strings
 *   - L = average length of each string
 * Space Complexity: O(N × L)
 */

function groupAnagrams_sorting(strs) {
    const res = {}; // Hashmap: key = sorted string, value = list of anagrams

    for (let s of strs) {
        // Sort each string alphabetically
        const sortedStr = s.split('').sort().join('');

        // If this sorted key doesn’t exist yet, create a new list
        if (!res[sortedStr]) {
            res[sortedStr] = [];
        }

        // Push the original string into its anagram group
        res[sortedStr].push(s);
    }

    // Return only the grouped arrays
    return Object.values(res);
}


/* --------------------------------------------------
 * ⚡ 2️⃣ Character Count-Based Approach
 * --------------------------------------------------
 * Idea:
 *  - Instead of sorting, use a fixed-size array of 26 integers.
 *  - Each index represents a letter (0 → 'a', 1 → 'b', ..., 25 → 'z').
 *  - Count how many times each character appears in a word.
 *  - Convert that count array to a string and use it as a key.
 *
 * Time Complexity: O(N × L)
 * Space Complexity: O(N × L)
 *
 * This approach avoids sorting and is faster when strings are long.
 */

function groupAnagrams_count(strs) {
    const res = {}; // Hashmap: key = character count pattern, value = list of anagrams

    for (let str of strs) {
        // Initialize an array of 26 zeros for 'a' to 'z'
        const count = new Array(26).fill(0);

        // Count the frequency of each character in the word
        for (let c of str) {
            const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
            count[index] += 1;
        }

        // Convert the count array to a comma-separated string
        // e.g., [1,0,0,1,...] → "1,0,0,1,0,..."
        const key = count.join(',');

        // Create a new array for this key if it doesn’t exist
        if (!res[key]) {
            res[key] = [];
        }

        // Push the word into its group
        res[key].push(str);
    }

    // Return all grouped anagram lists
    return Object.values(res);
}


/* --------------------------------------------------
 * 🧾 Example Test
 * --------------------------------------------------
 */

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log("👉 Using Sorting Key:");
console.log(groupAnagrams_sorting(words));

console.log("\n👉 Using Character Count Key:");
console.log(groupAnagrams_count(words));
