const generateRandomBetween = (minimum, maximum) => {
    const min = Math.ceil(minimum);
    const max = Math.ceil(maximum);
    const random = Math.floor(Math.random() * (max - min) + min);
    return random;
}

export default generateRandomBetween;