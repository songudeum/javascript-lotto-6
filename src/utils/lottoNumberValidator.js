import { Console } from "@woowacourse/mission-utils";
import {
    INSUFFICIENT_LOTTO_NUMBERS_ERROR,
    INVALID_LOTTO_NUMBERS_ERROR,
} from "./script";

const isInValidRangeOfNumber = (numbers) => {
    const filteredNumbers = numbers.filter((el) => 1 <= el && el <= 45);
    if (filteredNumbers.length !== 6) {
        Console.print(INVALID_LOTTO_NUMBERS_ERROR);
        throw new Error(INVALID_LOTTO_NUMBERS_ERROR);
    }
    return;
};

const isInSufficientLottoNumber = (numbers) => {
    if (numbers.length !== 6) {
        Console.print(INSUFFICIENT_LOTTO_NUMBERS_ERROR);
        throw new Error(INSUFFICIENT_LOTTO_NUMBERS_ERROR);
    }
    return;
};

const isNotNumber = (numbers) => {
    const filteredNumbers = numbers.filter((el) => isNaN(el));
    if (filteredNumbers.length !== 0) {
        Console.print(INVALID_LOTTO_NUMBERS_ERROR);
        throw new Error(INVALID_LOTTO_NUMBERS_ERROR);
    }
    return;
};

const isDuplicatedNumber = (numbers) => {
    if (!numbers.every((el, idx, arr) => arr.indexOf(el) === idx)) {
        Console.print(INVALID_LOTTO_NUMBERS_ERROR);
        throw new Error(INVALID_LOTTO_NUMBERS_ERROR);
    }
    return;
};

const lottoNumberValidator = [
    isDuplicatedNumber,
    isInValidRangeOfNumber,
    isInSufficientLottoNumber,
    isNotNumber,
];
export { lottoNumberValidator };
