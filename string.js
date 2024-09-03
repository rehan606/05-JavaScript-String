const name = 'rehan';
//UpperCase
console.log("Uppercase", name.toUpperCase());
//LowerCase
console.log("LowerCase", name.toLowerCase())


//Compare Strig
const subject = "chemistry";
const book = "chemIstry";

if( subject.toUpperCase === book.toUpperCase){
    console.log("I am reading This Book")
} else {
    console.log("i can not read this book")
}

// Remove White Space From string
const drinks = '  water';
console.log('Remove White Space Both Side:', drinks.trim())

//Comparing Example:

let drink = '  water';
let lequid =" water ";

if (drink.trim === lequid.trim){ // user trim for remove white space
    console.log("I drink water");
} else{
    console.log("i Can not drink water")
}