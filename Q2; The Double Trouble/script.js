// Q2; The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let array = [1, 2, 3, 4, 5, 1, 1, 1];
let resultArray = [];

function DoubleElement() {

    for (let key = 0; key < array.length; key++) {
        if (key > 0 && array[key] == array[key - 1]) {
            resultArray.push(array[key])
        }

        else {
            resultArray.push(array[key] + array[key])
        }
    }
    console.log(...array)
    console.log(...resultArray)
}

DoubleElement()
