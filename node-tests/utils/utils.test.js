const u_utils = require("./utils");
const expect = require("expect");

it("should add two numbers", () => {
  let res = u_utils.add(33, 11);

  expect(res)
    .toBe(44, `mar Expected 44. but got ${res}`)
    .toBeA("number", `${res} not a number`)
    .toBeLessThanOrEqualTo(44, `${res} is not less or equal to 44`);
});

// Testing async functions
it("Testing AsyncAdd  of two numbers", d => {
  u_utils.asyncAdd(14, 3, sum => {
    expect(sum)
      .toBe(17, `sum is ${sum}, but expected 17`)
      .toBeA("number", "typeOf is not a number");
    d();
  });
});

it("Testing square async", done => {
  u_utils.asyncSquare(5, sqrt => {
    expect(sqrt)
      .toBe(25, `${sqrt}, not 25`)
      .toBeA("number");
    done();
  });
});

// -- Test 4 --
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits
//If the function is passed a valid PIN string, return true, else return false.
it("ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits", () => {
  let p = u_utils.validatePIN("1234");

  expect(p).toBe(true, `Expected true. but got ${p}`);
});

// -- Test 5 --
// The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples:
// "din" => "((("
// "recede" => "()()()"
// "Success" => ")())())"
// "(( @" => "))(("

it("Convert a string to a new string where each character in the new string is ( or )", () => {
  let p = u_utils.duplicateEncode("din");

  expect(p).toBe("(((", `Not correct: \n expects \'\(\(\(\', returns ${p}`);
});


// -- Test 6 --

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

it("Trolls are attacking comment sections", () => {
  let p = u_utils.RemoveVowels("This website is for losers LOL!");

  expect(p).toBe("Ths wbst s fr lsrs LL!", `Expected \'Ths wbst s fr lsrs LL!"\' but got ${p}`);
});

// -- Test 7 --
// You are going to be given a word.Your job is to return the middle character of the word.If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.
// "test" should return "es"
// "testing" should return "t"
// "middle" should return "dd"
// "A" should return "A"

it("Returns the middle character of the word", () => {
  let p = u_utils.getMiddle("testing");

  expect(p).toBe('t', `Expected \'t\' but got ${p}`);
});

// -- Test 8 --
// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
// #Example 1: a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]
// #Example 2: a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []
// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: r must be without duplicates.
// Don't mutate the inputs.
it("Return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2", () => {

  //subtest 1
  let  a1 = ["arp", "live", "strong"]
 let a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
 let p = u_utils.inArray(a1, a2);
  expect(p).toInclude('arp', 'live', 'strong', `Expected to include "arp", "live", "strong" but got ${p}`);
  
   //subtest 2
   a1 = ["tarp", "mice", "bull"]
  a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
  
  p = u_utils.inArray(a1, a2);

 // expect(p).toInclude('arp', 'live', 'strong', `Expected to include "arp", "live", "strong" but got ${p}`);
  expect(p).toEqual("", `Expected to be  empty but got: ${p}`);
});




// -- Test 9 --
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
// The input string will only consist of lower case letters and/or spaces.

it("Returns the number of vowels in the given string", () => {
  let p = u_utils.getCount("testing it now");

  expect(p).toBe(4, `Expected 4 but got ${p}`);
});
