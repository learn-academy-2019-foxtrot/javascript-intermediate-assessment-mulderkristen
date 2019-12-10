// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// function called getFib
// create a starting variable with an array to blank
// Because the for loop can't go into negatives, set the first two values at index 0 and 1 to their numbers
// Then, run a loop where the new value at each index is equal to the value of the previous 2 indexes. 
// returns the array

var fibonacciStart = []

const getFib = (array)=> {
    array[0] = 1
    array[1] = 1
    for (let i=2; i < 10; i++){
        array[i]=array[i-2] + array[i-1]
    }
    return array
}

console.log(getFib(fibonacciStart))


// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.
//function called oddChecker
// takes an array as an argument
// returns new array with only odds

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]

const oddChecker = (array) => {
   return array.filter(value => {
        return value%2 !==0 && typeof(value) === "number"
    })
}

console.log(oddChecker(fullArr1))
console.log(oddChecker(fullArr2))


// 3. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 4. Write a function that takes in an array and returns an array in reverse order.
//function called reverseOrder
// takes an array as an argument
// returns the reverse order of the array

var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// Expected output: [7, 6, 5, 4, 3, 2, 1],
var originalArray2 = ["9", "1", "o", "h", "c", "e"]
// Expected output: ["e", "c", "h", "o", "1", "9"]
// Can I change this to foxtrot? ;) 

const reverseOrder = (array) => {
    return array.reverse()
}

console.log(reverseOrder(originalArray1))
console.log(reverseOrder(originalArray2))



// 5. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.
// function called letterCounter
// takes a string as an argument
// sets a count of 0 
// maps through the string as an array to count the letter and sets new count
// returns the count 

var ourString = "Hello Learn Students!"
// Expected output: 3

const letterCounter = (string) => {
    let count = 0
    string.toLowerCase().split("").map(value => {
        if (value === "l") {
            count++
        }
    })
    return count
}

console.log(letterCounter(ourString))

// 6. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.
// function called middleLetter
// takes a string as an argument
// checks if the length of the string is even or odd
// returns middle letters using .length/2

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

const middleLetter = (string) => {
        if (string.length%2 === 0) {
            return string[(string.length/2) - 1] + string[string.length/2]
        } else {
            return string[Math.floor(string.length/2)]
        }
}

console.log(middleLetter(middleLetters1))
console.log(middleLetter(middleLetters2))

// 7. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)
// program using object classes called SphereArea
// takes the radius as an argument
// returns the area of the sphere (4πr^2)

class SphereArea {
    constructor (radius){
        this.radius = radius
    }
    calculateArea (){
        return (4 * Math.PI * Math.pow(this.radius, 2)).toFixed(4)
    }
}

var sphereOne = new SphereArea(3)
var sphereTwo = new SphereArea(5)
var sphereThree = new SphereArea(10)

console.log(sphereOne.calculateArea())
console.log(sphereTwo.calculateArea())
console.log(sphereThree.calculateArea())

// 8. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}

const {doors, transmission} = myCar.specs

console.log(doors, transmission)

// STRETCH: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
// function called sumArray
// takes an array as an argument
// uses the map function to take the sum and push it into a new array
// returns the new array with sums

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

const sumArray = (array) => {
    var lastValue = 0
    var newArray = []
   return array.map((value, index) => {
       return lastValue = value + lastValue
       newArray = newArray.push(lastValue)
    })
    return newArray
}

console.log(sumArray(numbersToAdd1))
console.log(sumArray(numbersToAdd2))
console.log(sumArray(numbersToAdd3))