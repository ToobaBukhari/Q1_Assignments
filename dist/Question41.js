"use strict";
// Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians = ["Harry Houdini", "David Blaine", "Dynamo"];
function show_magcians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
show_magcians(magicians);
