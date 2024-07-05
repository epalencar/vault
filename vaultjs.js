/*Pseudocode

Create javascript file
Create constant with message to the user
Create first combination calculated variable 
Create second combination calculated variable
Create third combination calculated variable
Display message and vault codes to user in an alert box
Ensure comments are available in code base for each step
Add javascript to HTML file head

*/

const vaultmsg = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";
/* Create string with vault message*/

console.log(vaultmsg);
/*Add vault message to console log*/

const num1 = 5*2;
/*Calculate first value of combination*/

console.log(num1);
/*Log first value of combination in console*/

const num2 = 20+35-15;
/*Calculate second value of combination*/

console.log(num2);
/*Log second value of combination in console*/

const num3 = 78/2;
/*Calculate third value of combination*/

console.log(num3);
/*Log third value of combination in console*/

alert(vaultmsg + num1 + "-" + num2 + "-" + num3);
    
/*Display vault combination in alert box with message */