# PseudoCoding

## What's the goal?
* Creating a new password that is secure
* Must be >= 8 characters and <= 128 characters
* User will be asked whether to include lowercase, uppercase, numbers, and/or special characters
* At least one condition of the above 4 will be selected
* The returning password will be randomized
* The password will be displayed on the screen or as an alert
* Deploy website

## General Recommendation for STARTING:
1) Start with variables. What values are important for me to store?
* Maybe I can make a variable that contains all of the criteria:
    - var numbers = ;
    - var upperCase = ;
    - var lowerCase = ;
    - var specialCharacters = ;
    - var actualPassword = "";

2) Features of JavaScript used to ask the user for input on the page:
* Features:
    - window.prompt()
    - window.confirm()
    - window.alert()
* Test these things to see how they work!
    - What do each of these features output as a vlue?
    - Based on these outputs, we can create and IF/ELSE statement that will execute lines of code based on the user input.

3) We need to find a way to randomly pull characters/numbers from the given pool of options based on the number of character the user wants from the password
* Find a way to iterate over our given options based on the number of characters the user has requested from the password (for loops)
    - for loops are a way to do something over and over again
* While iterating over the options, we need to find a way to PUSH those randomly generated values to be stored in a variable.

4) Once the choices have been generated, the result must be displayed to the user as an ALERT

## Order to Solve the Problem
1) Create the GitHub repo
2) Put the starter code in the GitHub repo
3) TEST TO SEE IF THE JS FILE IS LINKED TO THE HTML FILE
* console.log("Hello, World!")
4) Create variables
5) Test window prompts
6) Write if else statements based on what the user responds with
7) Find a way to iteration through the potential characters given BASED ON the choices the user returned
8) Gather all of that information into a single variable
9) Return that variable to the user as the password

## Execution
var num_ofCharacters = number of characters user specifies
var optionCounter = the number of options the user answered "yes" to
var lowerCase = [array of lower case letters];
var upperCase = [array of upper case letters];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] or [0-9];
var specialCharacters = [array of special characters];
var arrayAssignments = [lowerCase, upperCase, numbers, specialCharacters];
var selections = [return from user input];
var passwordOutput =[empty array];

//1. Prompt user for password criteria
//  a. prompt user for number of characters between 8 - 128
//  b. prompt user on whether or not to include lowercase, uppercase, numeric, and or/special character values in the password

//2. Validate input
//  a. Track which criteria were selected
//  b. Track how many criteria were selected

//3. Generate password
//  a. use number of characters to determine how many times to run the main loop which randomly selects a character from a randomly selected list of characters
//  b. use number of inputs that are === true as the number of arrays to randomize


//4. Validate the generated password meets the password criteria

//5. Display generated password on the page
