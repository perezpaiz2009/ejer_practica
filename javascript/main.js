/**
 * Implement the solution in this function
 *
 * @param {number} n Examine this number
 * @returns {boolean} True if n is prime and false otherwise
 */
function isPrime(n) {
    if (n == 0 || n == 1 || n == 4) return false;

    for (let x = 2; x < n / 2; x++) {
        if (n % x == 0) return false;

    }
    return true;

}
let number = 22;
numberPrime = isPrime(number)
document.write(numberPrime);