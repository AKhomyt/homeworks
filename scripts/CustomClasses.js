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
    z = 5;
}

// Math------------------------------------------------------------------------------------------
// CreateHTML------------------------------------------------------------------------------------
class CcreateHTML {
    table(row, col) {
        let table = document.createElement("table");
        table.tr = [];
        for (let i = 0; i < col/*col*/; i++) {
            let tr = document.createElement("tr");
            table.tr.push(tr);

            table.tr[i].td = [];
            for (let j = 0; j < row/*row*/; j++) {
                let td = document.createElement("td");
                table.tr[i].td.push(td);
                table.appendChild(tr).appendChild(td);
            }
        }
        return table;
    };
}


// CreateHTML------------------------------------------------------------------------------------