import { lottoNumberValidator } from "./utils/lottoNumberValidator";
import { bonusNumberValidator } from "./utils/bonusNumberValidator";
import { DUPLICATE_BONUS_NUMBER_ERROR } from "./utils/script";
class LottoPrizeCalculator {
    #prizeNumberList;
    #bonusNumber;

    constructor(numbers, bonusNumber) {
        this.#validatePrizeNumber(numbers);
        this.#prizeNumberList = numbers.split(",").map((el) => Number(el));

        this.#validateBonusNumber(this.#prizeNumberList, bonusNumber);
        this.#bonusNumber = bonusNumber / 1;
    }

    #validatePrizeNumber(numbers) {
        const prizeNumberList = numbers.split(",").map((el) => Number(el));
        lottoNumberValidator.forEach((validator) => validator(prizeNumberList));
    }

    #validateBonusNumber(prizeNumberList, bonusNumber) {
        bonusNumberValidator.forEach((validator) => validator(bonusNumber));
        if (prizeNumberList.includes(bonusNumber)) {
            throw new Error(DUPLICATE_BONUS_NUMBER_ERROR);
        }
    }
}

export default LottoPrizeCalculator;
