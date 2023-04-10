import {UserGateway} from "../../src/user/UserGateway";
import {GetUsersOverviewUseCase} from "../../src/admin/GetUsersOverviewUseCase";
import {VERIFICATION_STATUS} from "../../src/admin/UserOverview";
import {User} from "../../src/user/User";

describe('Get users overview use case should', () => {
    test('translate users retrieved from gateway', async () => {
        const users = buildUsersFromGateway()
        const gateway = new class implements UserGateway {
            getAll(): Promise<User[]> {
                return new Promise<User[]>((resolve) => {
                    resolve(users);
                });
            }
        }
        const useCase = new GetUsersOverviewUseCase(gateway);

        const translatedUsers = await useCase.execute();

        expect(translatedUsers).toEqual([
            {name: "Quinta Kertess", rating: 5, country: "Bolivia", submittedOn: "16/02/2023", verificationStatus: VERIFICATION_STATUS.UNVERIFIED},
            {name: "Lindsey Ezzell", rating: 4, country: "Czech Republic", submittedOn: "30/05/2022", verificationStatus: VERIFICATION_STATUS.VERIFIED}
        ]);
    });

    const buildUsersFromGateway = () => [
        {
            id: '9da70cb8-4d17-4d79-ae93-8b6c47662c2c',
            firstName: 'Quinta',
            lastName: 'Kertess',
            submissionDate: '1676549713000',
            country: 'Bolivia',
            verified: false,
            rating: 5,
        },
        {
            id: 'c4f42f53-b1dc-4ff2-aca5-3ea19ecc77ed',
            firstName: 'Lindsey',
            lastName: 'Ezzell',
            submissionDate: '1653938543000',
            country: 'Czech Republic',
            verified: true,
            rating: 4,
        }
    ];
});