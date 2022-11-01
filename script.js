function countVowels(str) {

  let count = 0;
  let arr = str.toLowerCase().split("")
  let vowels = ["a","e","i","o","u"]

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(arr[i])) {
      count++
    }
  }
  return count;

}
console.log(countVowels("alabalaportocala"));

//8
