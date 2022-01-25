/**
 * Data Send to Local Storage
 * @param {*} key 
 * @param {*} arr 
 * @returns 
 */
function dataSend(key, arr){

    let data = JSON.stringify(arr);
    localStorage.setItem(key, data);

    return true;
}

/**
 * Get Data From Local Storage
 * @param {*} key 
 * @returns 
 */
function dataGet(key){

    let data = localStorage.getItem(key);
     return data ? JSON.parse(data) : false;
}


