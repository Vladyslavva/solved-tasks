function solve(st) {
    const obj = {};
    for(let i = 0; i < st.length; i++){
        obj[st[i]] = st.lastIndexOf(st[i]) - st.indexOf(st[i]);
    }
    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : obj[a] != obj[b] ? b : a > b ? b : a);
}

solve('axyzxyz');