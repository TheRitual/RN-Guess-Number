const generateRandomBetween = (minimum, maximum) => {
    const min = Math.ceil(minimum);
    const max = Math.ceil(maximum);
    const random = Math.round(Math.random() * (max - min) + min);
    return random;
}

export default generateRandomBetween;