const name = 'rehan';
//UpperCase
console.log("Uppercase", name.toUpperCase());
//LowerCase
console.log("LowerCase", name.toLowerCase())

//-------------------------------------------------------------------------
//Compare Strig
const subject = "chemistry";
const book = "chemIstry";

if( subject.toUpperCase === book.toUpperCase){
    console.log("I am reading This Book")
} else {
    console.log("i can not read this book")
}
//-------------------------------------------------------------------------
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
//OutPut: I drink water

//-------------------------------------------------------------------------
// Slice String

// structure : slice(startIndexNumber , EndBeforeIndexNumber);

let address = 'chittagong';
let slicePart = address.slice(4,7);
console.log(slicePart)

//Output: tag
//-------------------------------------------------------------------------

//Split -(Multiple string to array)

let friendStr = 'Rehan, Hassan, Jahed';
let friend = friendStr.split('|');
console.log("split string to array is=", friend)

//OutPut : split string to array is= [ 'Rehan, Hassan, Jahed' ]