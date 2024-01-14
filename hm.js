//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/


//  let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
//  let dog_names = ["Max","HAS","PuRple","dog"]

//  function findWords(st, arr){
//     for (let i = 0; i<arr.length; i++){
//         if (arr[i] in st){
//             console.log(`matched name --> ${arr[i]}`)
//         }
//     }
//  }
// findWords(dog_string, dog_names)


//need to check if it loops through each word. 
// match it to the sentence and print one or the other matched or no match 
// is it in the strign and what do i need to print 


//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    
    for (let i = 0; i<arr.length; i++){
        if (i % 2 === 0){
            arr.splice(i, 1, 'Even Index')
        }
        console.log(arr[i])
    }

    // length.arr.splice()
    console.log(arr)
} 
replaceEvens(Given_arr)

//if i is even if i is odd, len and for loop
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// define a start step and 
//loop through and use splice 
//slice will take out string, need to provide every "even" index
//splice will add in the "Even Index" to the even index that was sliced

let number = 2 

function even_or_odd(number) {
    return number % 2 ? 'Odd' : 'Even';
} console.log(number)
even_or_odd(number)



let nums = 4;

function number_to_string(nums) {
    return String(nums);
} console.log (nums)

number_to_string()
