var n = 33;
var counter = 0;
let i;
for (i = 1; i <= n; i++){
    if(n % i == 0){
    counter = counter + 1};
}
if (counter == 2){
    console.log(true);
} else console.log(false);
