"use strict"

// Math------------------------------------------------------------------------------------------
class CMath {
    percent(value, numberAtOneHundredPercent, digitCapacity) {
        digitCapacity = Math.pow(10, digitCapacity) || 4;
        let result;
        result = (value * 100) / numberAtOneHundredPercent;
        result = Math.round(result * digitCapacity) / digitCapacity;
        return result;
    };
}
// Math------------------------------------------------------------------------------------------