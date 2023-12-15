import { lottoNumberValidator } from "./utils/lottoNumberValidator";
class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    #validate(numbers) {
        lottoNumberValidator.forEach((validator) =>
            validator(numbers.join(","))
        );
    }
}

export default Lotto;
