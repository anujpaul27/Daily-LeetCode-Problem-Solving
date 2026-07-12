/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
let j=0;
   for (let i=0; i<nums.length; i++)
   {
       if (nums[j] !== nums[i])
       {
           j++;
           nums[j] = nums[i]
       }
   }
   return j+1
};

// for loops in js 
for (let i =0; i<10; i++)
{
    console.log(i) // it's should output is 1-> 10 
}