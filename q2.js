/*
Print the following pattern for the given N number of rows.
Pattern for N = 4
4444
4444
4444
4444
*/
function pattern(n){
    for(let i=0; i < n; i++){
        for(let j= 0; j< n; j++){
            process.stdout.write(`${n}`);
            
}
    console.log();
}}
pattern(4);