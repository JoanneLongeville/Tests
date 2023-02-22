//----Bubble sort-------------------------------------------------------------

let numbers = [2, 54, 7, 38, 22, 13, 19, 45, 31, 77, 98, 5, 12, 28, 81, 26, 72, 4, 20, 42];
let temporary = "";

function sortNumbers(array){
    for(i=0; i<array.length; i++){ //parcourir le tableau
        for(j=i+1; j<array.length; j++){ //reparcourir le tableau
            if(array[i]>array[j]){ // si la valeur1 est supérieure à la valeur2
                temporary = array[j]; // alors on met la valeur2 dans temporary
                array[j] = array[i]; // on met la valeur1 à la place de la précédente valeur2
                array[i] = temporary; //on met la valeur2 qui était dans temporary à la place de la précédente valeur1
            }
        }
    }
}
console.log("sortNumbers", sortNumbers(numbers)); //le résultat de la fonction est "undefined"
console.log("numbers", numbers);
console.log("temporary", temporary); //temporary contient la dernière valeur qui lui a été attribuée suite à la fonction


//----Tests----------------------------------------------------------------------

/*/let numbers = [1,4,3,2]
//let array = []
let temp = ""

function sortNumbers(a){
    for(i=0; i<a.length; i++){ //parcourir le tableau
        for(j=i+1; j<a.length; j++){ //parcourir le tableau
            if(a[i]>a[j]){ //si la valeur tu tableau1 est supérieure à la valeur du tableau2
                temp = a[j]
                a[j] = a[i]
                a[i] = temp
            }
        }
        //array[i] = a[i]
    }
}
console.log("sortNumbers", sortNumbers(numbers))
//console.log("array", array)
console.log("numbers", numbers)*/

/*let a = 1
let b = 2
function swap(a1,b1){
    let aa;
    aa = a
    a = b
    b = aa
}
swap(a,b)*/