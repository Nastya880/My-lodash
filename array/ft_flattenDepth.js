// _.flattenDepth(array, [depth=1])
// _.flattenDepth(array, 1);
// // => [1, 2, [3, [4]], 5]
 
// _.flattenDepth(array, 2);
// // => [1, 2, 3, [4], 5]

function ft_flattenDepth(array, depth = 1) {
    const result = [];

    const makeFlatten = function makeFlatten(array, result, control) {
        control += 1;
        if (control < depth) {
            array = flatten(array);
            makeFlatten(array, result, control);
        } else {
            return result.push(...array);
        }
    }

    for (const element of array) {
        let control = 0;
        if (Array.isArray(element)) {
            makeFlatten(element, result, control);
        } else {
            result.push(element);
        }
    }

    return result;
}

export {ft_flattenDepth}
