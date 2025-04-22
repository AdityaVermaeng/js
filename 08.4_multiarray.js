let arr = [
        ["Ram", 2, 3],
        [4, "shyam", 6],
        [7, 8, "Dheeru"],
    ]
    // console.log(arr);
    // console.log(arr[1]);
    // console.log(arr[0][0]);
    // for (let i = 0; i, arr.length; i++) {
    //     for (let j = 0; j < arr[i].length; j++) {
    //         console.log(arr[i][j]);
    //     }
    // } //// long procedure
    // arr.forEach(data => {
    //     data.forEach(data2 => {
    //         console.log(data2);
    //     });
    // });
for (let ar of arr) {
    for (i of ar) {
        console.log(i);
    }
}