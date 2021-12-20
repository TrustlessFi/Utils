// =================== GENERAL UTILS =====================
export var enforce = function (conditional, errorMessage) {
    if (!conditional)
        throw new Error(errorMessage);
};
export var zeroAddress = '0x0000000000000000000000000000000000000000';
/// ================== FIRST / LAST IN LIST ======================
export var firstOrNull = function (array) {
    if (array.length === 0)
        return null;
    return array[0];
};
export var first = function (array) {
    enforce(array.length > 0, 'First for empty array');
    return array[0];
};
export var last = function (array) {
    enforce(array.length > 0, 'Last for empty array');
    return array[array.length - 1];
};
// type PromiseType = PromiseType<typeof promisedOne> // => number
export var assertUnreachable = function (_x) { throw new Error('Didn\'t expect to get here'); };
// ===================== MATH ===========================
export var unscale = function (quantity, decimals) {
    if (decimals === void 0) { decimals = 18; }
    var digits = quantity.toString().length;
    var digitsToRemove = digits - 15;
    if (digitsToRemove > decimals) {
        throw new Error('number too large');
    }
    while (digitsToRemove > 9) {
        quantity = quantity.div(1e9);
        digitsToRemove -= 9;
        decimals -= 9;
    }
    var num = 0;
    if (digitsToRemove > 0) {
        decimals -= digitsToRemove;
        num = quantity.div(Math.pow(10, digitsToRemove)).toNumber();
    }
    else {
        num = quantity.toNumber();
    }
    var result = num / (Math.pow(10, decimals));
    return result;
};
