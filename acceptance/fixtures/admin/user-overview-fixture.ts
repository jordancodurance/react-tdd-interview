import {UserData, userData} from '../../../src/data/userData';

export class UserOverviewFixture {
    private entry: number = -1;

    private users = userData;

    public setEntry(entry: number) {
        this.entry = entry;
    }

    public getName(): string {
        return `${this.getUser().firstName} ${this.getUser().lastName}`
    }

    public getRating(): number {
        return this.getUser().rating;
    }

    public getCountry(): string {
        return this.getUser().country;
    }

    public getSubmissionDate(): string {
        const submittedOn = Number(this.getUser().submissionDate);
        return new Date(submittedOn).toLocaleDateString('en-gb');
    }

    public getVerificationStatus(): string {
        return this.getUser().verified ? 'Verified' : 'Unverified'
    }
    
    private getUser(): UserData {
        return this.users[this.entry - 1];
    }

}