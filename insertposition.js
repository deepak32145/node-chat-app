/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let check = true;
  for (let i = 0; i < nums.length; i++) {
    if (target == nums[i]) {
      check = false;
      return i;
    }
  }
  if(check){
      for(let j =0; j<nums.length; j++){
          if(target)
      }
  }
};
