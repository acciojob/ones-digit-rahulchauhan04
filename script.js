function onesDigit(n) {
  // your code here
	// First, check if the input is a positive integer
  if (!/^\d+$/.test(n)) {
    throw new Error("Input must be a positive integer");
  }
  
  // Convert the input to a string to handle leading zeros correctly
  const nStr = String(n);
  
  // Extract the last character (ones digit) and convert it back to a number
  const ones = parseInt(nStr.charAt(nStr.length - 1), 10);
  
  return ones;
}

// Do not change the code below

const n = prompt("Enter Number:");
alert(onesDigit(n));
