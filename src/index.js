module.exports = function toReadable(number) {
    let digits = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let ty = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let strnum = number.toString();
    if (number === 0) {
        return "zero";
    }
    if (number < 20) {
        return digits[number];
    }
    if (number >= 20 && number <= 99) {
        return `${ty[+strnum[0]]} ${digits[+strnum[1]]}`.trim();
    }
    if (number > 99 && number % 100 < 20) {
        return `${digits[+strnum[0]]} hundred ${digits[number % 100]}`.trim();
    }
    if (number > 99 && number % 100 >= 20) {
        return `${digits[+strnum[0]]} hundred ${ty[+strnum[1]]} ${
            digits[+strnum[2]]
        }`.trim();
    }
};
