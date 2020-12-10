//Feet To Mile
function feetToMile(feet){
    var mile = feet / 5280
    return mile;
}
var dhakaToSylhet = feetToMile(792000);
console.log(dhakaToSylhet);
var dhakaToDinajpur = feetToMile(1000000);
console.log(dhakaToDinajpur);

//WoodCalculator
function woodCalculator(chair, table, khat){
    var chairCalculate = chair * 1;
    var tableClaculate = table * 3;
    var khatCalculate = khat * 5;
    var totalCubicFeet = chairCalculate + tableClaculate + khatCalculate;
    return totalCubicFeet;
    // console.log(totalCubic);
}
var totalWoodNeed = woodCalculator(2, 2, 2);
console.log(totalWoodNeed);


//brickCalculator

function brickCalculator(floor){
    var bricks = 0;
    if(floor <= 10){
        bricks = floor * 15000;
    }
    else if(floor <= 20){
        var firstTenFloor = 10 * 15000;
        var remaining = floor - 10;
        var secondTenFloor = remaining * 12000;
        bricks = firstTenFloor + secondTenFloor;
    }
    else{
        var firstTenFloor = 10 * 15000;
        var secondTenFloor = 10 * 12000;
        var remaining = floor - 20;
        var moreThanTwenty = remaining * 10000;
        bricks = firstTenFloor + secondTenFloor + moreThanTwenty;
    }
    return bricks;
}
var totalBricks = brickCalculator(21);
console.log(totalBricks);



  

