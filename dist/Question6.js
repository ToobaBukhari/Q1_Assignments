"use strict";
/* Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
 Make sure you use each character combination, "\t" and "\n", at least once.
 Print the name once, so the whitespace around the name is displayed.
 Then print the name after striping the white spaces.*/
//some whitespace characters at the beginning and end of the name.
let PersonName = "\tTooba Bukhari\n";
console.log(PersonName);
//stripping the whitespace.
let strippedName = PersonName.trim();
console.log(strippedName);
