import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import React, {ReactNode} from "react";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#FFCCBC',
        color: '#C62828',
        border: '1px solid black',
        fontWeight: 'bold',
        fontSize: '1em'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        border: '1px solid black'
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(even)': {
        backgroundColor: theme.palette.action.hover,
    },
}));

export const OverviewTable = ({children}: { children: ReactNode }) => (
    <TableContainer component={Paper}>
        <Table>
            {children}
        </Table>
    </TableContainer>
);

export const Header = ({children}: { children: ReactNode }) => (
    <TableHead>
        <TableRow>
            {children}
        </TableRow>
    </TableHead>
);

export const Body = ({children}: { children: ReactNode }) => (
    <TableBody>
        {children}
    </TableBody>
);

export const Row = ({children}: { children: ReactNode }) => (
    <StyledTableRow>{children}</StyledTableRow>
);

export const Cell = ({children}: { children: ReactNode }) => (
    <StyledTableCell>{children}</StyledTableCell>
);

export const CenteredCell = ({children}: { children: ReactNode }) => (
    <StyledTableCell align="center">{children}</StyledTableCell>
);

