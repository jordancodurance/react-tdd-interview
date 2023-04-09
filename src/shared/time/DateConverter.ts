export class DateConverter {
    public static toDate(epoch: string): string {
        const submittedOn = Number(epoch);
        return new Date(submittedOn).toLocaleDateString('en-gb');
    }
}