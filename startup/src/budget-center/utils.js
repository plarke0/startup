export function getValueFrom(inputId, valueType) {
    const rawValue = document.getElementById(inputId).value;

    if (valueType === "note") {
        return rawValue;
    }

    if (valueType === "key") {
        return rawValue;
    }

    if (valueType === "money") {
        return convertValueToMoney(rawValue);
    }

    if (valueType === "date") {
        //TODO: Test date formatting.
        return rawValue;
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
            return null;
        }
    } else {
        return null;
    }

}

function validateDate() {

}