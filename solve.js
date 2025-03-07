// 1. problem 1

// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.
// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).


function buildArray(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] += (nums[nums[i]] % nums.length) * nums.length;
    }
    
    for (let i = 0; i < nums.length; i++) {
        nums[i] = Math.floor(nums[i] / nums.length);
    }
    
    return nums;
}



//2. problem 2

// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

function getConcatenation(nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        nums.push(nums[i]);
    }
    return nums;
}

