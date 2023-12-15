import { Console } from "@woowacourse/mission-utils";
import { INVALID_BONUS_NUMBER_ERROR } from "./script";

const isInValidRangeOfNumber = (bonusNumber) => {
    const bonusNumberToNumber = bonusNumber / 1;
    if (!(1 <= bonusNumberToNumber && bonusNumberToNumber <= 45)) {
        Console.print(INVALID_BONUS_NUMBER_ERROR);
        throw new Error(INVALID_BONUS_NUMBER_ERROR);
    }
    return;
};

const isNotOneOfNumber = (bonusNumber) => {
    const bonusNumberToNumber = bonusNumber / 1;
    if (isNaN(bonusNumberToNumber)) {
        Console.print(INVALID_BONUS_NUMBER_ERROR);
        throw new Error(INVALID_BONUS_NUMBER_ERROR);
    }
    return;
};

const bonusNumberValidator = [isInValidRangeOfNumber, isNotOneOfNumber];

export { bonusNumberValidator };
