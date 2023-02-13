// complete the given function

function palindrome(str){
	str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
module.exports = palindrome;
