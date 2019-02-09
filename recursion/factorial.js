export const factorialIterative = num => {
    if(num < 1) return null;

    let total = 1;

    for(let n = num; n > 1; n--){
        total *= n;
    }

    return total;
};