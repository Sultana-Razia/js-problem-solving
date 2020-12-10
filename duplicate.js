var name = [3, 6, 2, 7, 3, 2, 8, 1, 9, 11, 56];
var uniqueNmae = [];
for(var i =0; i < name.length; i++){
    var element = name[i];
    var index = uniqueNmae.indexOf(element);
    if(index == -1){
        uniqueNmae.push(element);
    }
}
console.log(uniqueNmae);