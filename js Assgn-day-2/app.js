// Assignment-1
function anyNum(number) {
  if (number > 0) {
    console.log("Its a Positive Number");
  } else if (number < 0) {
    console.log("Its a Negative Number");
  } else {
    console.log("Its a Zero");
  }
}
anyNum(-8);
anyNum(-0);
anyNum(2);

// Assignment-2
function factorial(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i * n);
  }
}
factorial(12);
factorial(5);

// Assignment-3
function larger(a, b) {
  if (a > b) {
    console.log("a is larger");
  } else {
    console.log("b is larger");
  }
}
larger(5, 7);
larger(9, 2);

// Assignment-4
// function palindrome(string) {
//   if (word == palindrome) {
//     return true;
//   } else {
//     return false;
//   }
// }
// word(palindrome);
// word("CAR");

// Assignment -5

function isPrime(n) {
  if (n > 1) {
    // looping through 2 to number-1
    for (let i = 2; i <= n; i++) {
      if (n % i == 0) {
        console.log(i);
        isPrime = false;
        break;
      }
    }
  } else {
    console.log("The number is not a prime number.");
  }
}
isPrime(11);

// Assignment-6
function calculator(a, b, operator) {
  if (operator == "+") {
    console.log(a + b);
  } else if (operator == "-") {
    console.log(a - b);
  } else if (operator == "*") {
    console.log(a * b);
  } else {
    console.log("Invalid Output");
  }
}
calculator(5, 8, "*");

// Assignment-7
function vowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      sum++;
    }
  }
  console.log(sum);
}
vowels("pallavi");

// Assignment-10
function multiplication(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(n + "*" + i + "=" + i * n);
  }
}
multiplication(9);

// Assignment -9
function fibonacci(n) {
  let n1 = 0;
  let n2 = 1;

  for (let i = 2; i <= n; i++) {
    let nextTerm = n1 + n2;
    console.log(nextTerm);
    n1 = n2;
    n2 = nextTerm;
  }
}
fibonacci(8);
