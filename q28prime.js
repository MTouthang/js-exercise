/**
 * 28. Use for loop to iterate from 0 to 100 and print only prime numbers
 */
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

let count = 0;
for (let j = 2; j <= 100; j++) {
  if (isPrime(j)) {
    count += 1;
    console.log(j);
  }
}
console.log(count);
