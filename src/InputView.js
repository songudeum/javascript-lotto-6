import { Console } from "@woowacourse/mission-utils";
import {
    QUESTION_OF_PURCHASE_COST,
    QUESTION_OF_PRIZE_NUMBER,
    QUESTION_OF_BONUS_NUMBER,
} from "./utils/script";
import LottoPrize from "./LottoPrize";
import purchaseCostValidator from "./utils/purchaseCostValidator";
import { lottoNumberValidator } from "./utils/lottoNumberValidator";
import { bonusNumberValidator } from "./utils/bonusNumberValidator";

const InputView = {
    printQuestionOfPurchaseCost() {
        Console.print(QUESTION_OF_PURCHASE_COST);
    },

    async readPurchaseCost() {
        try {
            const purchaseCost = await Console.readLineAsync(
                QUESTION_OF_PURCHASE_COST
            );
            const purchaseCostToNumber = purchaseCost / 1;
            purchaseCost && this.validatePurchaseCost(purchaseCostToNumber);
            return purchaseCostToNumber;
        } catch (error) {
            this.readPurchaseCost();
        }
    },

    validatePurchaseCost(purchaseCost) {
        purchaseCostValidator.forEach((validator) => {
            validator(purchaseCost / 1);
        });
    },

    printQuestionOfPrizeNumber() {
        Console.print(QUESTION_OF_PRIZE_NUMBER);
    },

    async readPrizeNumber() {
        try {
            const inputValueOfPrizeNumber = await Console.readLineAsync(
                QUESTION_OF_PRIZE_NUMBER
            );
            inputValueOfPrizeNumber &&
                lottoNumberValidator.forEach((validator) =>
                    validator(inputValueOfPrizeNumber.split(","))
                );
            return inputValueOfPrizeNumber;
        } catch (error) {
            this.readPrizeNumber();
        }
    },

    printQuestionOfBonusNumber() {
        Console.print(QUESTION_OF_BONUS_NUMBER);
    },

    async readBonusNumber() {
        try {
            const inputValueOfBonusNumber = await Console.readLineAsync(
                QUESTION_OF_BONUS_NUMBER
            );
            inputValueOfBonusNumber &&
                bonusNumberValidator.forEach((validator) =>
                    validator(inputValueOfBonusNumber)
                );
            return inputValueOfBonusNumber;
        } catch (error) {
            this.readBonusNumber();
        }
    },
};

export default InputView;
