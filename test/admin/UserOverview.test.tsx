import {GetUsersOverviewUseCase} from "../../src/admin/GetUsersOverviewUseCase";
import {LocalUserGateway} from "../../src/user/LocalUserGateway";
import renderer from 'react-test-renderer';
import UsersOverview from "../../src/admin/UsersOverview";
import {waitFor} from "@testing-library/react"

describe('User overview should', () => {
    test('retain previous accepted snapshot', async () => {
        const gateway = new LocalUserGateway();
        const useCase = new GetUsersOverviewUseCase(gateway);

        const tree = renderer
            .create(<UsersOverview useCase={useCase}/>)
            .toJSON();

        await waitFor(() => expect(tree).toMatchSnapshot());
    });
});