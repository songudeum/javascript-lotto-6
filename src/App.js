import InputView from "./InputView";
import OutputView from "./OutputView";
class App {
    async play() {
        InputView.printQuestionOfPurchaseCost();
        const purchaseCost = await InputView.readPurchaseCost();
        const lottoList =
            purchaseCost && OutputView.printPurchaseLottoList(purchaseCost);
        InputView.printQuestionOfPrizeNumber();
        const prizeNumber = await InputView.readPrizeNumber();
        InputView.printQuestionOfBonusNumber();
        const bonusNumber = await InputView.readBonusNumber();
        lottoList && prizeNumber && bonusNumber &&
            OutputView.printPrizeResult(lottoList, prizeNumber, bonusNumber);
    }
}

export default App;
