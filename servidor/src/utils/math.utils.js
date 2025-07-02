
export function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
}

export function toStripeAmout(total) {
    return Math.round(total * 100)
}