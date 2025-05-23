1.def check_voting_eligibility(age):
    if age >= 18:
        return "Eligible to vote."
    else:
        return "Not eligible to vote."

# Example usage:
age_input = int(input("Enter your age: "))
print(check_voting_eligibility(age_input))
Explanation:
The legal voting age in many countries is 18 years.

The function check_voting_eligibility takes one argument: age.

If age is 18 or older, it returns "Eligible to vote."

Otherwise, it returns "Not eligible to vote."

Let me know if you want the eligibility age customized for a specific country.



You said:
in java 

ChatGPT said:
Sure! Here's how you can write the same function in Java:

java
Copy
Edit
import java.util.Scanner;

public class VotingEligibility {

    public static String checkVotingEligibility(int age) {
        if (age >= 18) {
            return "Eligible to vote.";
        } else {
            return "Not eligible to vote.";
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        
        String result = checkVotingEligibility(age);
        System.out.println(result);
        
        scanner.close();
    }
}
Explanation:
The method checkVotingEligibility takes an integer age and returns a String message about eligibility.

The main method gets user input using Scanner, calls the method, and prints the result.

Let me know if you'd like to add more features like error handling for negative input!



You said:
java script

ChatGPT said:
Here’s how you can write the voting eligibility check function in JavaScript:

javascript
Copy
Edit
function checkVotingEligibility(age) {
    if (age >= 18) {
        return "Eligible to vote.";
    } else {
        return "Not eligible to vote.";
    }
}

// Example usage
let age = prompt("Enter your age:");
age = parseInt(age);

if (!isNaN(age)) {
    alert(checkVotingEligibility(age));
} else {
    alert("Please enter a valid number.");
}
2.function findGreaterNumber(num1, num2) {
    if (num1 > num2) {
        return `${num1} is greater than ${num2}.`;
    } else if (num2 > num1) {
        return `${num2} is greater than ${num1}.`;
    } else {
        return "Both numbers are equal.";
    }
}

// Example usage
let number1 = parseFloat(prompt("Enter the first number:"));
let number2 = parseFloat(prompt("Enter the second number:"));

if (!isNaN(number1) && !isNaN(number2)) {
    alert(findGreaterNumber(number1, number2));
} else {
    alert("Please enter valid numbers.");
}
3.function checkNumberSign(number) {
    if (number > 0) {
        return "The number is positive.";
    } else if (number < 0) {
        return "The number is negative.";
    } else {
        return "The number is zero.";
    }
}

// Example usage
let input = parseFloat(prompt("Enter a number:"));

if (!isNaN(input)) {
    alert(checkNumberSign(input));
} else {
    alert("Please enter a valid number.");
}
4.function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "The number is even.";
    } else {
        return "The number is odd.";
    }
}

// Example usage
let input = parseInt(prompt("Enter a number:"));

if (!isNaN(input)) {
    alert(checkEvenOrOdd(input));
} else {
    alert("Please enter a valid number.");
}
5.function containsLetterA(inputString) {
    if (inputString.includes('a') || inputString.includes('A')) {
        return "The string contains the letter 'a' or 'A'.";
    } else {
        return "The string does not contain the letter 'a' or 'A'.";
    }
}

// Example usage
let userInput = prompt("Enter a string:");

if (userInput) {
    alert(containsLetterA(userInput));
} else {
    alert("Please enter a valid string.");
}
6.function isLongerThanFive(inputString) {
    if (inputString.length > 5) {
        return "The string is longer than 5 characters.";
    } else {
        return "The string is 5 characters or less.";
    }
}

// Example usage
let userInput = prompt("Enter a string:");

if (userInput !== null) {
    alert(isLongerThanFive(userInput));
} else {
    alert("No input provided.");
}
7.function isBetweenOneAndTen(number) {
    if (number >= 1 && number <= 10) {
        return "The number is between 1 and 10.";
    } else {
        return "The number is not between 1 and 10.";
    }
}

// Example usage
let input = parseFloat(prompt("Enter a number:"));

if (!isNaN(input)) {
    alert(isBetweenOneAndTen(input));
} else {
    alert("Please enter a valid number.");
}
8.function containsHello(inputString) {
    if (inputString.toLowerCase().includes("hello")) {
        return "The string contains the word 'hello'.";
    } else {
        return "The string does not contain the word 'hello'.";
    }
}

// Example usage
let userInput = prompt("Enter a string:");

if (userInput) {
    alert(containsHello(userInput));
} else {
    alert("Please enter a valid string.");
}
9function isMultipleOfThree(number) {
    if (number % 3 === 0) {
        return "The number is a multiple of 3.";
    } else {
        return "The number is not a multiple of 3.";
    }
}

// Example usage
let input = parseInt(prompt("Enter a number:"));

if (!isNaN(input)) {
    alert(isMultipleOfThree(input));
} else {
    alert("Please enter a valid number.");
}
10.function multiplyByTen(number) {
    return number * 10;
}

// Example usage
let input = parseFloat(prompt("Enter a number:"));

if (!isNaN(input)) {
    alert("Result: " + multiplyByTen(input));
} else {
    alert("Please enter a valid number.");
}