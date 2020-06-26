// Your code here:
// Your code here:
for(let i = 99; i >= 1; i--){
    if(i === 1){
        console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.")
     } else if (i === 2) {
        console.log("1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall")
    } else  {
        console.log((i-1) + " bottles of de milk on the wall, " + (i-1) + " bottles of milk. Take one down and pass ir around, " + (i-2) + " bottles of milk on the wall. ")
    }
}