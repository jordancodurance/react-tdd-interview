import React, {useEffect, useState} from 'react';
import {Body, Cell, CenteredCell, Header, OverviewTable, Row} from "./StyledUsersOverview";
import copy from "./user-overview-copy.json";
import {GetUsersOverviewUseCase} from "./GetUsersOverviewUseCase";
import {UserOverview} from "./UserOverview";

const UsersOverview = ({useCase}: { useCase: GetUsersOverviewUseCase }) => {
    const [users, setUsers] = useState<UserOverview[]>([]);

    useEffect(() => {
        useCase.execute().then(u => setUsers(u));
    });

    return (
        <OverviewTable>
            <Header>
                <Cell>{copy.nameHeader}</Cell>
                <CenteredCell>{copy.ratingHeader}</CenteredCell>
                <Cell>{copy.countryHeader}</Cell>
                <Cell>{copy.submissionDate}</Cell>
                <Cell>{copy.verificationHeader}</Cell>
            </Header>
            <Body>
                {users.map((u) => (
                    <Row key={u.name}>
                        <Cell>{u.name}</Cell>
                        <CenteredCell>{u.rating}</CenteredCell>
                        <Cell>{u.country}</Cell>
                        <Cell>{u.submittedOn}</Cell>
                        <Cell>{u.verificationStatus}</Cell>
                    </Row>
                ))}
            </Body>
        </OverviewTable>
    );
};

export default UsersOverview;