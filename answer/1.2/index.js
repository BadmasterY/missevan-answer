window.onload = function () {
    console.log('loaded!');

    const a = { family: { brother: "xiaoming", father: "laowang", mother: "xiaomei" }, name: "Mr.", sex: "male", age: "27" };

    console.log('target: ', a);
    console.log('clone:  ', deepClone(a));
}

// 递归遍历
function deepClone(obj, clone = undefined) {
    const toString = Object.prototype.toString;
    // 这里只考虑了 {} 和 [], 如果需要可以对类型进行扩展
    toString.call(obj) === '[object Array]' ? clone = clone || [] : clone = clone || {};
    for (const i in obj) {
        if (typeof obj[i] === 'object' && obj[i] !== null) {
            if (Array.isArray(obj[i])) {
                clone[i] = [];
            } else {
                clone[i] = {};
            }
            deepClone(obj[i], clone[i]);
        } else {
            clone[i] = obj[i];
        }
    }
    return clone;
}