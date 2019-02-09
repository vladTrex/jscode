export const calculateFibonacci = num => {
    if(num <= 1 ) return num;

    if(num > 93) return new Error('The number cannot be more than 93')

    return calculateFibonacci(num - 1) + calculateFibonacci(num - 2);
};