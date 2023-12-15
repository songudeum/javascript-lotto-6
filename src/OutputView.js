import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";
import LottoPrize from "./LottoPrize";

const OutputView = {
    createLottoList(amountOfLotto) {
        const lottoList = [];
        try {
            while (lottoList.length !== amountOfLotto) {
                const lotto = new Lotto(
                    Random.pickUniqueNumbersInRange(1, 45, 6)
                );
                lottoList.push(lotto);
            }
            return lottoList;
        } catch (error) {
            this.createLottoList(amountOfLotto);
        }
    },

    printPurchaseLottoList(purchaseCost) {
        const amountOfLotto = purchaseCost / 1000;
        const lottoList = this.createLottoList(amountOfLotto);
        const scriptOfLottoList = lottoList.map((lotto) =>
            lotto
                .printLottoNumber()
                .sort((a, b) => a - b)
                .join(", ")
                .split(",")
        );
        Console.print(`${amountOfLotto}개를 구매했습니다.\n[${scriptOfLottoList.join("]\n[")}]`);
        return lottoList;
    },

    printPrizeResult(lottoList, prizeNumber, bonusNumber) {
        const lottoListToAccess = lottoList.map((lotto) =>
            lotto.printLottoNumber()
        );
        const lottoPrize = new LottoPrize(prizeNumber, bonusNumber);
        const matchResult =
            lottoListToAccess &&
            lottoPrize.calculateMatchResult(lottoListToAccess);
        const threeMatch = matchResult.filter((el) => el === 3).length
        const fourMatch = matchResult.filter((el) => el === 4).length
        const fiveMatch = matchResult.filter((el) => el === 5).length
        const bonusMatch = matchResult.filter((el) => el === "5bonus").length
        const allMatch = matchResult.filter((el) => el === 6).length
        const totalProfit = lottoPrize.calculateTotalProfit(lottoListToAccess);
        Console.print(
            `당첨 통계\n---\n3개 일치 (5,000원) - ${threeMatch}개\n4개 일치 (50,000원) - ${fourMatch}개\n5개 일치 (1,500,000원) - ${fiveMatch}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${bonusMatch}개\n6개 일치 (2,000,000,000원) - ${allMatch}개\n총 수익률은 ${totalProfit}%입니다.`
        );
    },
};

export default OutputView;
