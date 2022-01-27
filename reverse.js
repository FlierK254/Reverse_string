// code to reverse a string
function reverseString(word) {
    var splitWord = word.split(""); 
    var reverseWord = splitWord.reverse(); 
    var joinWord = reverseWord.join("");
    return joinWord; 
}
 
console.log(reverseString("wellcome"));



