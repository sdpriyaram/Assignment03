int1 = parseInt(window.prompt('Enter the first number:'),10);
int2 = parseInt(window.prompt('Enter the second number:'),10);

if (isNaN(int1)|| isNaN(int2))
    document.write("You have entered invalid numbers. please try again.")
else
    if (int1 > int2)
        document.write("The larger of " + int1 + " and " + int2 + " is " + int1 + ".");
    else if(int2 > int1)
        document.write("The larger of " + int1 + " and " + int2 + " is " + int2 + ".");
    else 
        document.write("The values " + int1 + " and " + int2 + " are equal.");