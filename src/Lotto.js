import { lottoNumberValidator } from "./utils/lottoNumberValidator";
class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers.sort((a, b) => a - b);
    }

    #validate(numbers) {
        lottoNumberValidator.forEach((validator) => validator(numbers));
    }

    printLottoNumber(){
      return this.#numbers
    }
}

export default Lotto;
