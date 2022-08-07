// Code your solution in this file!
const blocks = 42;
const feet = 264;

function distanceFromHqInBlocks(someValue){
    // returns the nubmer of blocks given a value 
    if (someValue > 42){
        return someValue - 42;
    } else {
        return 42 - someValue;
    }

}


function distanceFromHqInFeet(someValue){
    distanceFromHqInBlocks(someValue);
}