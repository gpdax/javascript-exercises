function palindromes(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Check if the cleaned string is the same as its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
    
palindromes("racecar")
palindromes("rac3e3car")
palindromes("A car, a man, a maraca.")
palindromes("racecar!")
palindromes("Racecar!")
palindromes("ZZZZ car, a man, a maracaz.")
palindromes("r3ace3car")



// Do not edit below this line
module.exports = palindromes;
