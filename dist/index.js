"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unscale = exports.assertUnreachable = exports.last = exports.first = exports.firstOrNull = exports.enforce = void 0;
// =================== GENERAL UTILS =====================
var enforce = function (conditional, errorMessage) {
    if (!conditional)
        throw new Error(errorMessage);
};
exports.enforce = enforce;
/// ================== FIRST / LAST IN LIST ======================
var firstOrNull = function (array) {
    if (array.length === 0)
        return null;
    return array[0];
};
exports.firstOrNull = firstOrNull;
var first = function (array) {
    (0, exports.enforce)(array.length > 0, 'First for empty array');
    return array[0];
};
exports.first = first;
var last = function (array) {
    (0, exports.enforce)(array.length > 0, 'Last for empty array');
    return array[array.length - 1];
};
exports.last = last;
// type PromiseType = PromiseType<typeof promisedOne> // => number
var assertUnreachable = function (_x) { throw new Error('Didn\'t expect to get here'); };
exports.assertUnreachable = assertUnreachable;
// ===================== MATH ===========================
var unscale = function (quantity, decimals) {
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
exports.unscale = unscale;
