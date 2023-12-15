import {
    INSUFFICIENT_LOTTO_NUMBERS_ERROR,
    INVALID_LOTTO_NUMBERS_ERROR,
    INVALID_BONUS_NUMBER_ERROR,
    DUPLICATE_BONUS_NUMBER_ERROR,
} from "./utils/script";

class LottoPrizeCalculator {
    #prizeNumber;
    #bonusNumber;

    constructor(numbers, bonusNumber) {
        this.#validatePrizeNumber(numbers.split(","));
        this.#validateBonusNumber(bonusNumber);
        this.#prizeNumber = numbers.split(",");
        this.#bonusNumber = bonusNumber;
    }

    #validatePrizeNumber(numbers) {
        if (numbers.length !== 6) {
            throw new Error(INSUFFICIENT_LOTTO_NUMBERS_ERROR);
        }
    }

    #validateBonusNumber(bonusNumber) {
        if (bonusNumber.length !== 1) {
            throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
        }
    }

    // TODO: 추가 기능 구현
}

export default LottoPrizeCalculator;
