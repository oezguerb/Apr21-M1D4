// FUNCTIONS

// the reasoning is avoiding DRY 
// don't repeat yourself 

// FUNCTION DECLARATION
const bark = function(){
    console.log('a dog barks!')
}

bark() // this is the FUNCTION EXECUTION
bark() 

// RETURN VALUES 
// PARAMETERS

const sum5to3 = function(){
    let result = 5 + 3 
    return result                 
}

// THE RETURN STATEMENT WILL ALLOW YOU TO USE THE FUNCTION INVOCATION AS A VALUE 

console.log(sum5to3()) // this is really 8

let eight = sum5to3()
console.log(eight)

const greetSarah = function() {
    return 'Hello Sarah!'
}

const x = greetSarah()

console.log(x)

console.log(2 + sum5to3())



const sumAnyNumbers = function(n1, n2) {
    let result = n1 + n2 
    return result 
}

sumAnyNumbers(6,7)       // internally n1 becomes 6 and n2 becomes 7 internally
sumAnyNumbers(1,3)

let strive1 = sumAnyNumbers(6,7)
let strive2 = sumAnyNumbers(1,3)


console.log(strive1 + strive2)

const greetUserWithParameter = function(striver) {
    return `Hello ${striver}`
}

let greeting = greetUserWithParameter('Vardan')
console.log(greeting)

const saveJustTheFirstLetter = function(name) {
    let justTheFirst = name.slice(0,1)
    return justTheFirst

}

console.log(saveJustTheFirstLetter('janusz'))




const barkorBork = function(dogSize){
    if(dogSize === 'little dog') {
        return 'bark'

    } else {
        return 'bork'
    }

}

barkorBork('little')
console.log(barkOrBork('big'))