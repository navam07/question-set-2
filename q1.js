/*
    1.print the following pattern
    1
    23
    345
    4567

2.Print the following pattern for the given N number of rows.
Pattern for N = 4
4444
4444
4444
4444

3.Write a program to generate the reverse of a given number N. Print the corresponding reverse number.
4.Write a program to print first x terms of the series 3N + 2 which are not multiples of 4.
5.write a program to check whether a number is prime or not.
*/
for (let i = 1; i <= 4; i++) {
    let a = i;
    for (let j = 1; j <= i; j++){
        process.stdout.write(`${a}`);
        a++;
    };
    console.log();
    }