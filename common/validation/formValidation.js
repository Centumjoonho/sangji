
const integerValidation = (value) => {
    // Attempt to convert the value to a number
    const numberValue = Number(value);

    if (!isNaN(numberValue) && Number.isInteger(numberValue)) {
        return 'P'; // It's a valid integer
    } else {
        return '숫자만 입력 가능합니다.'; // It's not a valid integer
    }
}

const stringValidation = (value) => {
    if (typeof value === 'string') {
        return 'P'; // It's a string
    } else {
        return '문자만 입력 가능합니다.'; // It's not a string
    }
}

const notBlankValication = (value) => {
    if (value != '' && value != undefined) {
        return 'P'; // It's a string
    } else {
        return '값을 입력해 주세요.'; // It's not a string
    }
}

export {
    integerValidation,
    stringValidation,
    notBlankValication
}