
//using callback function for practice

function isPrime(num, abc, abcd) {
    let i;

    if (num == 1) return false;
    else
        for (i = 2; i <= Math.sqrt(num); i++)
            if (num % i == 0)
                break;

    if (i > Math.sqrt(num))
        abc();
    else
        abcd();
}

function p() {
    console.log("prime");
}

function np() {
    console.log("not prime");
}


let num = 34;
isPrime(console.log(`${num} is `), p, np);