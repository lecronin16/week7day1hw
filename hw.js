//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

const findWords = ()=>{
    for ( let dog of dog_names) {
        if (dog_string.includes(dog)) {
            console.log('Matched dog_name')
        }
        else {
            console.log('No Matches')
        }
    }
};

findWords()


//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// let given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

// function replaceEvens(arr){
//     arr.splice(0,2,'even index')
//     console.log(arr)
// }

function replaceEvens(arr){
    const new_arr = []
    for ( let i = 0; i < arr.length; i++){
        if (i % 2 == 0 ) {
            new_arr.push('even index')
        }
        else {
            new_arr.push(arr[i])
            //shoot... this is pushing the index UGH-- GOT IT! was missing arr[i]
        }
    }
    return new_arr
};

console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



// It's bonus time in the big city! The fatcats are rubbing their paws in anticipat
// ion... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). 
// Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. 
// If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" 
// (= "\u00A3", JS, Go, Java, Scala and Julia), 
// $" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).

function bonusTime(salary, bonus) {
    if (bonus == true){
      let amtBonus = salary * 10
      return `£${amtBonus}`
    }
    else{
      return `£${salary}`
    }
  };

// You are given the length and width of a 4-sided polygon. 
// The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function(l , w) {
    if (l==w){
      return l*w
    }
    else{
      return w+w+l+l
    }
  };