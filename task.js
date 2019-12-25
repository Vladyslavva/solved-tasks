function permuteAPalindrome (input) {
    let resCount = count(input);
    cnt = 0;
    for(let key in resCount){
        if(resCount[key] % 2 !== 0) {
            cnt++;
            if (cnt > 1) return false;
        }
    }
    return true;
}

function count(str){
    let obj = {};
    for(let i = 0; i < str.length; i++){
        if(str[i] in obj){
            obj[str[i]] += 1;
        } else obj[str[i]] = 1;
    }
    return obj;
}

function daysRepresented(trips){
    let cnt = 0;
    trips.sort((a, b) => (a[0] - b[0]));
    checkDates(trips);
    for(let i = 0; i < trips.length; i++){
        let days = trips[i][1] - trips[i][0] + 1;
        cnt += days;
    }
    return cnt;
}

function checkDates(trips) {
    let res = [];
    for(let i = 0; i < trips.length - 1; i++) {
        if (trips[i][1] >= trips[i + 1][0]) {
            trips[i][1] = trips[i + 1][1];
            trips.splice(i + 1, 1);
            i--;
        }
    }
}

daysRepresented([ [ 106, 118 ],
    [ 251, 254 ],
    [ 186, 192 ],
    [ 211, 233 ],
    [ 191, 204 ],
    [ 201, 223 ] ])