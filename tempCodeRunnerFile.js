et obj = {};
    for (let i of numbers) {
        obj[i] = true;
    }
    console.log('Object', obj);

    let obj_keys = Object.keys(obj);
    console.log(obj_keys); // ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    let newArray = obj_keys.map(Number);
    console.log(newArray); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]