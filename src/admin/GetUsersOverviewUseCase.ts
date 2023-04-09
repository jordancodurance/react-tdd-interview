import {User} from "./User";
import {UserGateway} from "./UserGateway";
import {UserOverview, VERIFICATION_STATUS} from "./UserOverview";
import {DateConverter} from "../shared/time/DateConverter";

export class GetUsersOverviewUseCase {
    private gateway: UserGateway;

    constructor(gateway: UserGateway) {
        this.gateway = gateway;
    }

    public async execute(): Promise<UserOverview[]> {
        const users = await this.gateway.getAll();
        return users.map(u => this.createUserOverview(u));
    }

    private createUserOverview(user: User): UserOverview {
        return {
            name: `${user.firstName} ${user.lastName}`,
            rating: user.rating,
            country: user.country,
            submittedOn: DateConverter.toDate(user.submissionDate),
            verificationStatus: user.verified ? VERIFICATION_STATUS.VERIFIED : VERIFICATION_STATUS.UNVERIFIED
        };
    }
}