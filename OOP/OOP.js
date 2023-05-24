// //----------------------------------------------
// // OBJECT BASICS
// // Using 'let obj_name = {}' to initialize an object  
// let myBook = {
//     title: "financial feminists", //class var
//     author: "Tori Dunlap",
//     pageCount: 300
// }
// console.log(myBook) //output all the attributes
// console.log(`${myBook.title} by ${myBook.author}`) // only output the mentioned attributes
// myBook.title = "Animal Farm"
// myBook.author = "George Orwell"
// console.log(`${myBook.title} by ${myBook.author}`)

// // Challenge:
// // Model a person with attributes: name, age, location
// let person = {
//     name: "Uyen",
//     year: 2023,
//     age: 20,
//     location: "Vietnam"
// }
// console.log(`In ${person.year}, ${person.name} is ${person.age} and from ${person.location}`)
// // Add one year to age & year:
// person.age = person.age + 1
// person.year = person.year + 1
// console.log(`In ${person.year}, ${person.name} is ${person.age} and from ${person.location}`)

//----------------------------------------------
// FUNCTION & OOP

// Obj: myBook
let myBook = {
    title: "Financial Feminists",
    author: "Tori Dunlap", //don't forget the comma
    pageCount: 300
} 

// Obj: otherBook
let otherBook = {
    title: "Animal Farm",
    author: "George Orwell",
    pageCount: 200
}

// Function: print out title, author, pages
let getSummary = function(book){
    console.log(`${book.title} by ${book.author} has ${book.pageCount} pages.`)
}

getSummary(myBook)
getSummary(otherBook)

// Using obj in a function to return multiple values separately
let getSummaryObj = function(book){
    return {
        summary: `${book.title} is written by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let myBookSummaryObj = getSummaryObj(myBook) //initialize a getSummary2 obj
let otherBookSummaryObj = getSummaryObj(otherBook)
console.log(myBookSummaryObj.summary) //just print out the summary for myBook
console.log(otherBookSummaryObj.pageCountSummary) //just print out the pageCount summary for otherBook

// Challenge:

let convertFahrenheit = function(fahrenheit){
    return {
        fahrenheit: `Temperature in Fahrenheit: ${fahrenheit}*F`,
        celsius: `Convert to Celsius: ${(fahrenheit - 32) * (5/9)}*C`,
        kelvin: `Convert to Kelvin: ${(fahrenheit + 459.67)* (5/9)}*K`
    }
}

let tempSummary = convertFahrenheit(32)
console.log(tempSummary.fahrenheit)
console.log(tempSummary.celsius)