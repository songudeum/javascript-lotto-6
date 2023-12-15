import { lottoNumberValidator } from "./utils/lottoNumberValidator";

class LottoPrizeCalculator {
    #prizeNumber;
    #bonusNumber;

    constructor(numbers, bonusNumber) {
        this.#validatePrizeNumber(numbers.split(",").map((el) => Number(el)));
        this.#validateBonusNumber(bonusNumber / 1);
        this.#prizeNumber = numbers.split(",").map((el) => Number(el));
        this.#bonusNumber = bonusNumber / 1;
    }

    #validatePrizeNumber(numbers) {
        lottoNumberValidator.forEach((validator) => validator(numbers));
    }

    #validateBonusNumber(bonusNumber) {
        if (bonusNumber.length !== 1) {
            throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
        }
    }

    // TODO: 추가 기능 구현
}

export default LottoPrizeCalculator;
