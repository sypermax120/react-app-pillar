import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../main/Header';
import { RootState } from '../../mock/store';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function History() {
    const history = useSelector((state: RootState) => state.history.history);

    return (
        <div className="App">
            <div className="App__first">
            <Header />
            <p>History</p>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Tour Name</StyledTableCell>
                    <StyledTableCell align="right">Admin Name</StyledTableCell>
                    <StyledTableCell align="right">Data</StyledTableCell>
                    <StyledTableCell align="right">Type</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {history.map((row: any) => (
                    <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                        {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.adminName}</StyledTableCell>
                    <StyledTableCell align="right">{row.createdAt}</StyledTableCell>
                    <StyledTableCell align="right">{row.type}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            </div>
        </div>
    );
}

export default History;
