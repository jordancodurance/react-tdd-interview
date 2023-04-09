import {DateConverter} from "../../../src/shared/time/DateConverter";

describe('Date Converter should', () => {
    test.each([
        ["1679324548000", "20/03/2023"],
        ["1676135439000", "11/02/2023"],
        ["1641164434000", "02/01/2022"]
    ])
    ('convert epoch to local date', (epoch, expectedDate) => {
        const convertedDate = DateConverter.toDate(epoch);

        expect(convertedDate).toBe(expectedDate);
    });
});