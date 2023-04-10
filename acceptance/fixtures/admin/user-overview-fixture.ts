import {GetUsersOverviewUseCase} from "../../../src/admin/GetUsersOverviewUseCase";
import {UserOverview} from "../../../src/admin/UserOverview";
import {LocalUserGateway} from "../../../src/user/LocalUserGateway";

export class UserOverviewFixture {
    private entry: number = -1;
    private gateway = new LocalUserGateway();
    private useCase = new GetUsersOverviewUseCase(this.gateway);

    public setEntry(entry: number) {
        this.entry = entry;
    }

    public async getName(): Promise<string> {
        return (await this.getOverview()).name;
    }

    public async getRating(): Promise<number> {
        return (await this.getOverview()).rating;
    }

    public async getCountry(): Promise<string> {
        return (await this.getOverview()).country;
    }

    public async getSubmissionDate(): Promise<string> {
        return (await this.getOverview()).submittedOn;
    }

    public async getVerificationStatus(): Promise<string> {
        return (await this.getOverview()).verificationStatus;
    }
    
    private async getOverview(): Promise<UserOverview> {
        const overviews = await this.useCase.execute();
        return overviews[this.entry - 1];
    }

}