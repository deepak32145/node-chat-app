/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = x.toString();
  let newstr = str.split('').reverse().join('');
  //console.log(str);
  //console.log(newstr);
  if (str === newstr) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(1001));
