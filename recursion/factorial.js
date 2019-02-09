export const factorialIterative = num => {
    if(num < 1) return null;

    let total = 1;

    for(let n = num; n > 1; n--){
        total *= n;
    }

    return total;
};

export const factorialRecursive = num =>
    num === 1 || num === 0 ? 1 : num * factorialRecursive(num - 1);
