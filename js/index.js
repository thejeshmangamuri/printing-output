// initial setup
let a = 3;
let b = 5;
let c;

let output = 'let a = 3;\n';
output += 'let b = 5;\n';
output += 'let c;\n';
output += '-----------\n';
output += 'a + b = ' + (a + b) + "\n";
output += 'a - b = ' + (a - b) + "\n";
output += 'a * b = ' + (a * b) + "\n";
output += 'a / b = ' + (a / b) + "\n";
output += 'a % b = ' + (a % b) + "\n";
output += 'a += b = ' + (a += b) + "\n";
output += 'a -= b = ' + (a -= b) + "\n";
output += 'a *= b = ' + (a *= b) + "\n";
output += 'a /= b = ' + (a /= b) + "\n";
output += 'a %= b = ' + (a %= b) + "\n";
output += 'a == b = ' + (a == b) + "\n";
output += 'a != b = ' + (a != b) + "\n";
output += 'a > b = ' + (a > b) + "\n";
output += 'a < b = ' + (a < b) + "\n";
output += '!a && !c = ' + (!a && !c) + "\n";
output += '!a || !c = ' + (!a || !c) + "\n";

alert(output);

// let sum = a+b;
// let sub = a-b;
// let mul = a*b;

// alert()

let first_name = "Thejesh";
let last_name = "Mangamuri";
let email = "mang0095@algonquinlive.com";

// Single line Chaining
/*let output;
output = `My name is ${first_name} ${last_name}. You can contact me at ${email  }.`;
*/

// Multi line Chaining
    output = 'My name is '
    output += first_name;
    output += ' ';
    output += last_name;
    output += '.'
    output += ' ';
    output += 'You can contact me at ';
    output += email;
    output += '.'
    
alert(output);
