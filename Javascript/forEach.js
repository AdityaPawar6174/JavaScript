// forEach() --> method used to iterate over the elements of array and apply 
//               a specified function (callback) to each elememnt
                    
let numbers = [1,2,3,4,5];

numbers.forEach(display);
numbers.forEach(double);
numbers.forEach(square);

function display(elememnt){
    console.log(elememnt);
}

function double(elememnt, index, array){
    array[index] = elememnt * 2;
    console.log(array[index]);
}

function square(elememnt, array, index){
    array[index] = Math.pow(elememnt, 2);
    console.log(array[index]);
}
