const { log: l } = console;

let key = "60b91a70-b0fa-46f0-af94-6a631c4726a6";
let word = "bad"
let url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${key}`;

let urlLiteral = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/bad?key=60b91a70-b0fa-46f0-af94-6a631c4726a6";

// WORDLE TOOL

// write a program that takes any given sequence of x letters and returns all words that can be spelled with just those letters

// alternatively, the program can also return all words that don't contain these letters

// in either functionality, the program will have a filter to only list the most common y words from the list

