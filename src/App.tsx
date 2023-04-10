import React from 'react';
import UserOverview from "./admin/UsersOverview";
import {LocalUserGateway} from "./user/LocalUserGateway";
import {GetUsersOverviewUseCase} from "./admin/GetUsersOverviewUseCase";

function App() {
  const userGateway = new LocalUserGateway();
  const getUsersOverviewUseCase = new GetUsersOverviewUseCase(userGateway);

  return (
    <UserOverview useCase={getUsersOverviewUseCase}/>
  );
}

export default App;
