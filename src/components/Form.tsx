"use client"
import React from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';

interface Props {

}
interface Column {
    id: 'name' | 'code' | 'population' | 'size' | 'density';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}
const columns: readonly Column[] = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 170 },
    { id: 'population', label: 'population', minWidth: 170 },
    { id: 'size', label: 'size', minWidth: 170 },
    { id: 'density', label: 'density', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 170 },
]

interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: number;
}

function createData(
    name: string,
    code: string,
    population: number,
    size: number,
): Data {
    const density = population / size;
    return { name, code, population, size, density };
}


const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];

/**Choose Options */

const chosoeOptions = [
    'Active Policies',
    'Lapse Policies',
    'Revived Policies',
    'Renewals',
    'Cancellations',
    'Issued Policies',
];

//Add reducers
const Form: React.FC<Props> = ({

}) => {
    const theme = useTheme();
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    const header = ['Policy No.', 'Product Name', 'Policy Holder Name', 'Policy Status', 'Modal Premium (INR)', 'Issue Date', 'Due Date']
    const data = [['00087194', 'Pramerica Life Dhan Suraksha', 'NIDHI SHRIVASTAVA', 'Free look Cancellation', '10,068.56', '29-Sep-2011', '01-Jan-1900'],
    ['00040083', 'PLIL Tatkal Suraksha Gold', 'SUNIL YADAV', 'Policy Terminated', '6,792.47', '21-Oct-2010', '21-Oct-2011'],
    ['00130413', 'PLIL Tatkal Suraksha Gold', 'POONAM', 'Policy Terminated', '16,478.61', '29-Mar-2012', '29-Sep-2012'],]


    return (
        <>
            <h1>POLICY DETAILS</h1>

            <div>
                <span>Choose data type from list</span>
                <FormControl sx={{ m: 1, minWidth: 280 }}>
                    <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                        value={age}
                        inputProps={{ 'aria-label': 'Without label' }}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>All Policies</em>
                        </MenuItem>
                        {chosoeOptions.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

            </div>


            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Paper>
        </>
    )
}
export default Form
