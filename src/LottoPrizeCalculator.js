import { lottoNumberValidator } from "./utils/lottoNumberValidator";
import { bonusNumberValidator } from "./utils/bonusNumberValidator";
import { DUPLICATE_BONUS_NUMBER_ERROR } from "./utils/script";
import { priceOfPrize } from "./utils/priceOfPrize";
class LottoPrizeCalculator {
    #prizeNumberList;
    #bonusNumber;

    constructor(numbers, bonusNumber) {
        this.#validatePrizeNumber(numbers);
        this.#prizeNumberList = numbers
            .split(",")
            .map((el) => Number(el))
            .sort((a, b) => a - b);

        this.#validateBonusNumber(this.#prizeNumberList, bonusNumber);
        this.#bonusNumber = bonusNumber / 1;
    }

    #validatePrizeNumber(numbers) {
        const prizeNumberList = numbers.split(",").map((el) => Number(el));
        lottoNumberValidator.forEach((validator) => validator(prizeNumberList));
    }

    #validateBonusNumber(prizeNumberList, bonusNumber) {
        const bonusNumberToNumber = bonusNumber / 1;
        bonusNumberValidator.forEach((validator) => validator(bonusNumber));
        if (prizeNumberList.includes(bonusNumberToNumber)) {
            throw new Error(DUPLICATE_BONUS_NUMBER_ERROR);
        }
    }

    calculateMatchResult(lotto) {
        const matchResult = lotto.map((oneOfLotto) => {
            const winningCount = this.matchPrizeNumber(oneOfLotto);
            return winningCount === 5
                ? this.matchBonusNumber(oneOfLotto)
                : winningCount;
        });
        return matchResult;
    }

    matchPrizeNumber(oneOfLotto) {
        let winningCount = 0;
        for (let i = 0; i < oneOfLotto.length; i++) {
            if (this.#prizeNumberList.includes(oneOfLotto[i])) {
                winningCount += 1;
            }
        }
        return winningCount;
    }

    matchBonusNumber(oneOfLotto) {
        return oneOfLotto.includes(this.#bonusNumber) ? "5bonus" : 5;
    }

    calculateTotalPrize(lotto) {
        const matchResult = this.calculateMatchResult(lotto);
        const totalPrize = matchResult.reduce(
            (acc, result) => acc + priceOfPrize[result],
            0
        );
        return totalPrize;
    }

    calculateTotalProfit(lotto) {
        const totalPrize = this.calculateTotalPrize(lotto);
        const purchaseCost = lotto.length * 1000;
        return ((totalPrize / purchaseCost) * 100).toFixed(2);
    }
}

export default LottoPrizeCalculator;
