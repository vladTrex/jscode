export const reverseInt = num => {
    const reversed = num.toString()
                        .split('')
                        .reverse()
                        .join('');

    return parseInt(reversed) * Math.sign(num);
};