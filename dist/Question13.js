"use strict";
/*Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that
 stores several examples. Use your list to print a series of statements about these items,
such as “I would like to own a Honda motorcycle.”*/
const fav_transportation = ["motorcycle", "car", "cycle"];
const brands = ["Honda", "Hyundai", "Aima"];
for (let i = 0; i < fav_transportation.length; i++) {
    console.log(`I would like to own a ${brands[i]} ${fav_transportation[i]}`);
}
