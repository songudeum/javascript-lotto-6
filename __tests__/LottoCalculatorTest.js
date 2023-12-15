import LottoPrizeCalculator from "../src/LottoPrizeCalculator";

describe("당첨 계산기 테스트", () => {
    test.each(["1,2,3,4,5,0", "1,2,3", "일,2,3,4,5,6", "1,1,1,2,3,4"])(
        "당첨 번호에 대한 예외 처리 테스트",
        (input) => {
            const bonusNumber = 1;
            expect(() => new LottoPrizeCalculator(input, bonusNumber)).toThrow(
                "[ERROR]"
            );
        }
    );
});
