// This function takes a users array and set value and pushes the greater
//  values into a new array, as well as keeps count of how many items in
//  the array are greater than the set value 

function greaterThan(arr, y) {
var newArr = []
var count = 0

    for (var i = 0; i < arr.length; i++ ) {
        if (arr[i] > y ) {
            newArr.push(arr[i])
            count++;
        }
    }
    return newArr;
}