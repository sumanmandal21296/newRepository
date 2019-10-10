
function isPrime(num) {
  let i;

  if (num == 1) return false;
  else
    for (i = 2; i <= Math.sqrt(num); i++)
      if (num % i == 0)
        break;

  if (i > Math.sqrt(num))
    return true;
  else
    return false;
}

let j;
let num = 65;

for (j = 1; j <= num; j++)
  console.log(` ${j} = ${isPrime(j)}`);

//somechanges
