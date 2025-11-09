function getValueFrom(inputId, valueType) {
    const rawValue = document.getElementById(inputId).value;

    if (valueType === "note") {
        return rawValue;
    }

    if (valueType === "money") {
        
    }

    if (valueType === "date") {

    }
}

function convertValueToMoney(value) {
    let splitValueList = value.split(".");
    const length = splitValueList.length;
    let dollarValue = length !== 0 ? (parseInt(splitValueList[0]) * 100) : 0;

    if (length === 1) {
        return dollarValue;
    } else if (length === 2) {
        const centLength = splitValueList[1].length;
        let centValue = parseInt(splitValueList[1]);
        if (centLength === 1) {
            return dollarValue + centValue * 10;
        } else if (centLength === 2) {
            return dollarValue + centValue;
        } else {
            //ERROR
        }
    } else {
        //ERROR
    }

}

function validateDate() {

}


module.exports = {
  
};