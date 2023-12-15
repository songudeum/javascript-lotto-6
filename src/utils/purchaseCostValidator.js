import { Console } from "@woowacourse/mission-utils";
import { INVALID_PURCHASE_COST_ERROR } from "./script";

const isNotMultipleOfThousand = (purchaseCost) => {
    if (purchaseCost % 1000 != 0) {
        Console.print(INVALID_PURCHASE_COST_ERROR);
        throw new Error(INVALID_PURCHASE_COST_ERROR);
    }
    return;
};

const isNotNumber = (purchaseCost) => {
    if (isNaN(purchaseCost)) {
        Console.print(INVALID_PURCHASE_COST_ERROR);
        throw new Error(INVALID_PURCHASE_COST_ERROR);
    }
    return;
};

const purchaseCostValidator = [isNotMultipleOfThousand, isNotNumber];

export default purchaseCostValidator;
