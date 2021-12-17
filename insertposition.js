/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (!nums.includes(target)) {
    for (let i = nums.length; i >= 0; i--) {
      if (nums[i - 1] < target) {
        return i;
      }
    }
    return 0;
  } else {
    return nums.indexOf(target);
  }
};
