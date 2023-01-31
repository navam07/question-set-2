// Function to print first x terms of the series 3N + 2 which are not multiples of 4
function Series(x) {
    for (var i = 1; i <= x; i++) {
        var term = 3 * i + 2;
        if (term % 4 != 0) {
            console.log(term);}
    }
}
Series(5);