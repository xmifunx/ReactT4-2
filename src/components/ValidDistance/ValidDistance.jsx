const regexDistance = new RegExp(/^[+-]?\d+(\.\d+)?$/);

export const isValidDistance = (distance) => {
    return regexDistance.test(distance)
}