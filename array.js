/*1. Find the last element of the following arrays.
arr1 = [3,7,34,90,12]
arr2 = [true, "green", "where",12,56]
*/
// arr1 = [3,7,34,90,12]
arr1 = [3,7,34,90,12];
const last = arr1[arr1.length -1];
console.log(last)
// arr2 = [true, "green", "where",12,56]
arr2 = [true, "green", "where",12,56];
const lastelement = arr2[arr2.length -1];
console.log(lastelement);
/*2. Write a JS program that will join the following array elements into a string
myPets = ["Cow", "Bird", "Snake", "Dog"];
*/
myPets = ["Cow", "Bird", "Snake", "Dog"];
let x=myPets.toString()
console.log(x);

/*Write a JS script to sort the following array items
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
*/
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
console.log(arr3.sort(function(a,b){return a -b}));

/*Write a program to remove duplicates from the following array.
Console the array without duplicates, and console another array that only contains the duplicates
var arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"];
*/
var arr= ["apple", "mango", "apple", "orange", "mango", "mango"];
let arry = arr.filter((orange,index)=>{
    return arr.indexOf(orange) === index;
});
console.log(arry)

var arr= ["apple", "mango", "apple", "orange", "mango", "mango"];
let duparry = arr.filter((orange,index)=>{
return arr.indexOf(orange) !==index;

});
console.log(duparry);

/*Write a JS script to search for the following word in the array.
"way"
If the word is present, console it else console "the search word was not found"
// let arr5 = ["the", "way", "x", 4];
// */
let arr5 = ["the", "way", "x",4];
if (arr5[1]==["way"]){
    console.log("way")
}
else{
    (arr5[1]!=["way"])
        console.log("the search word was not found")
    
}

/*Write a JS script to sort the following string
let word = "sevink"
*/
let word = "sevink"
console.log(word.split('').sort().join(''));