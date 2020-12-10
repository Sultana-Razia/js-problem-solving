// var depth = 10;
function animalCalculator(depth){
    var animal = 0;
    if(depth <= 10){
        animal = depth * 50;
    }
    else if(depth <=20){
        var firstTen = 10 * 50;
        var remaining = depth - 10;
        var secondTwenty = remaining * 100;
        animal = firstTen + secondTwenty;
    }
    else{
        var firstTen = 10 * 50;
        var secondTwenty = 10 * 100;
        var remaining = depth - 20;
        var thirdTen = remaining * 300;
        animal = firstTen + secondTwenty + thirdTen;
    }
    return animal;
}
var count = animalCalculator(10);
console.log(count);