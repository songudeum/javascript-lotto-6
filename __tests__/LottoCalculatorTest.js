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

    test.each(["0", "46", "1,2", "1 2"])(
        "보너스 번호에 대한 예외 처리 테스트",
        (input) => {
            const prizeNumber = "1,2,3,4,5,6";
            expect(() => new LottoPrizeCalculator(prizeNumber, input)).toThrow(
                "[ERROR]"
            );
        }
    );

    test("당첨번호와 주문 번호가 동일한 경우 에러", () => {
        const prizeNumber = "1,2,3,4,5,6";
        const input = "1";

        expect(() => new LottoPrizeCalculator(prizeNumber, input)).toThrow(
            "[ERROR]"
        );
    });

    test("당첨 여부를 배열에 저장한다.", async () => {
        const lotto = [
            [1, 2, 3, 4, 5, 6],
            [2, 3, 4, 5, 6, 7],
        ];
        const prizeNumber = "1,2,3,4,5,6";
        const bonusNumber = "7";
        const result = [6, "5bonus"];

        const lottoPrizeCalculator = new LottoPrizeCalculator(
            prizeNumber,
            bonusNumber
        );

        await expect(lottoPrizeCalculator.calculateMatchResult(lotto)).toEqual(
            result
        );
    });
});
