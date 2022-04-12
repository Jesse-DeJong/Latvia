const sum  = (n) => {
    let j = 0; // establish a variable to store the iterative sum

    for ( i = 0; i <= n; i++ ) {
        j = j + i; // add the previous loops value j to the current loop iteration i
    }
    console.log(j); // once the loops are finished print the final value of the sum j
}

sum(10); // pass in n number of iterations