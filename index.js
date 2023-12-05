//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
 // for (let i = 0; i < gifts.length; i++) {
   // console.log(`Wrapped ${gifts[i]} and added a bow!`);
 // }

  //return gifts;
//}

//wrapGifts(gifts);
debugger;
function writeCards(name, eventName) {
    let msgArray = [];
    for (let i = 0; i < name.length; i++){
        msgArray.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`)
    }
    return msgArray;
} 
function countDown() {
let countDown = [0];
while (countDown < 11) {
    console.log(countDown++)
} 
}