import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

let rows=[]
// const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:5006/lastLogin');
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const result = await response.json();
//       rows = result.map((element,index)=>{
//           return {id:index+1,
//               full_name:element.full_name,
//               occupation:element.occupation,
//               email:element.email,
//               created_at:element.created_at,
//               status:element.status
//           }})
//     console.log(rows)
//     } catch (err) {
//         console.error(err.message)
//     }
//   }
// await fetchData();

rows=[
    {
        "id": 1,
        "full_name": "John Doe",
        "occupation": "Developer",
        "email": "john.doe2@example.com",
        "created_at": null,
        "status": true
    },
    {
        "id": 2,
        "full_name": "John Doe",
        "occupation": "Developer",
        "email": "john.doe3@example.com",
        "created_at": null,
        "status": true
    },
    {
        "id": 3,
        "full_name": "John Doe",
        "occupation": "Developer",
        "email": "john.doe4@example.com",
        "created_at": null,
        "status": true
    },
    {
        "id": 4,
        "full_name": "John Doe",
        "occupation": "Developer",
        "email": "john.doe5@example.com",
        "created_at": null,
        "status": true
    },
    {
        "id": 5,
        "full_name": "John Doe",
        "occupation": "Developer",
        "email": "john.differentemail@example.com",
        "created_at": null,
        "status": true
    },
    {
        "id": 6,
        "full_name": "hey sdfasdf",
        "occupation": "engineer",
        "email": "jognsndf@gmail.com",
        "created_at": null,
        "status": true
    },
    {
        "id": 7,
        "full_name": "hey sdfasdf",
        "occupation": "engineer",
        "email": "johanesgnsndf@gmail.com",
        "created_at": null,
        "status": true
    },
    {
        "id": 8,
        "full_name": "rrrrqqqqqqq qqqqqqqqqqqqqqqqqqqq",
        "occupation": "qqqqasdfas",
        "email": "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
        "created_at": null,
        "status": true
    },
    {
        "id": 9,
        "full_name": "asdf asdfa",
        "occupation": "dfasdf",
        "email": "dsafas",
        "created_at": null,
        "status": true
    },
    {
        "id": 10,
        "full_name": "asdf asdfasd",
        "occupation": "asdf",
        "email": "fasdf",
        "created_at": null,
        "status": true
    },
    {
        "id": 11,
        "full_name": "aaa aaaaaaaaaaaa",
        "occupation": "aaaaaaaaa",
        "email": "aaaaaaaaaaaaa",
        "created_at": null,
        "status": true
    },
    {
        "id": 12,
        "full_name": "dsafas dfasd",
        "occupation": "asdfasdf",
        "email": "fsadf",
        "created_at": null,
        "status": true
    },
    {
        "id": 13,
        "full_name": "dasdfsdfv fasdfasfd",
        "occupation": "asdfasdfasdf",
        "email": "fasdfsdfasdf",
        "created_at": null,
        "status": true
    },
    {
        "id": 14,
        "full_name": "fasdf asdf",
        "occupation": "dfadsf",
        "email": "fasdfas",
        "created_at": null,
        "status": true
    },
    {
        "id": 15,
        "full_name": "asdf asdf",
        "occupation": "fasdf",
        "email": "fasd",
        "created_at": null,
        "status": true
    },
    {
        "id": 16,
        "full_name": "asdf asdf",
        "occupation": "fasdfasdfasdf",
        "email": "fasdasdfasdf",
        "created_at": null,
        "status": true
    },
    {
        "id": 17,
        "full_name": "aaaaa asdf",
        "occupation": "fasdfasdfasdf",
        "email": "fasdasdfasdfasdfsdf",
        "created_at": null,
        "status": true
    },
    {
        "id": 18,
        "full_name": "asdf asdf",
        "occupation": "asdf",
        "email": "asdf",
        "created_at": null,
        "status": true
    },
    {
        "id": 19,
        "full_name": "qwer qwer",
        "occupation": "erwqer",
        "email": "qwer",
        "created_at": null,
        "status": true
    },
    {
        "id": 20,
        "full_name": "qwerwerqw qwererqwe",
        "occupation": "erwqerwerq",
        "email": "qwerqwerrqwer",
        "created_at": null,
        "status": true
    },
    {
        "id": 21,
        "full_name": "qwerwerqwqwer qwererqwewer",
        "occupation": "erwqerwerqrqwer",
        "email": "werqwe",
        "created_at": null,
        "status": true
    },
    {
        "id": 22,
        "full_name": "qweeeeeeeee wqerwe",
        "occupation": "wqerrrrrrrrrrrrrrr",
        "email": "wqer",
        "created_at": null,
        "status": true
    },
    {
        "id": 23,
        "full_name": "qweeeeeeeeeqwer wqerweqwer",
        "occupation": "werqwer",
        "email": "qwerq",
        "created_at": null,
        "status": true
    },
    {
        "id": 24,
        "full_name": "qweeeeeeeeeqwerwerqw wqerweqwerwererqwe",
        "occupation": "werqwerwerqweweqr",
        "email": "qwerqqwerrqwe",
        "created_at": null,
        "status": true
    },
    {
        "id": 25,
        "full_name": "eee qq",
        "occupation": "111",
        "email": "q",
        "created_at": null,
        "status": true
    },
    {
        "id": 26,
        "full_name": "eee3qwe qqrwerqw",
        "occupation": "111werqer",
        "email": "qerwer",
        "created_at": null,
        "status": true
    },
    {
        "id": 27,
        "full_name": "eee3qwe32 qqrwerqw23",
        "occupation": "111werqer",
        "email": "23",
        "created_at": null,
        "status": true
    },
    {
        "id": 28,
        "full_name": "eee3qwe32212 qqrwerqw23",
        "occupation": "111werqer1212",
        "email": "1212",
        "created_at": null,
        "status": true
    },
    {
        "id": 29,
        "full_name": "eee3qwe32212 qqrwerqw23",
        "occupation": "111werqer1212",
        "email": "12121",
        "created_at": null,
        "status": true
    },
    {
        "id": 30,
        "full_name": "eee3qwe32212 qqrwerqw23",
        "occupation": "111werqer121212",
        "email": "23333333",
        "created_at": null,
        "status": true
    },
    {
        "id": 31,
        "full_name": "ROD EFER",
        "occupation": "EFRER",
        "email": "RRFWE@GMAIL.COM",
        "created_at": null,
        "status": true
    },
    {
        "id": 32,
        "full_name": "QWEEEE QWEWE",
        "occupation": "QW",
        "email": "QWEQW",
        "created_at": null,
        "status": true
    },
    {
        "id": 33,
        "full_name": "QWEEEE QWEWE",
        "occupation": "QWqwe",
        "email": "qweqwe",
        "created_at": null,
        "status": true
    },
    {
        "id": 34,
        "full_name": "QWEEEEfds QWEWEdf",
        "occupation": "QWqwef",
        "email": "qweqwedf",
        "created_at": null,
        "status": true
    },
    {
        "id": 35,
        "full_name": "QWEEEEfds QWEWEdf",
        "occupation": "QWqwef",
        "email": "weeeeeeeeee",
        "created_at": null,
        "status": true
    },
    {
        "id": 36,
        "full_name": "hey sdfasdf",
        "occupation": "engineer",
        "email": "jognsnddf@gmail.com",
        "created_at": null,
        "status": true
    },
    {
        "id": 37,
        "full_name": "hey sdfasdf",
        "occupation": "engineer",
        "email": "jognsnddqqf@gmail.com",
        "created_at": null,
        "status": true
    },
    {
        "id": 38,
        "full_name": "hey sdfasdf",
        "occupation": "engineer",
        "email": "jogns2nddqqf@gmail.com",
        "created_at": null,
        "status": true
    },
    {
        "id": 39,
        "full_name": "hey sdfasdf",
        "occupation": "engineer",
        "email": "jogns2n2ddqqf@gmail.com",
        "created_at": null,
        "status": true
    },
    {
        "id": 40,
        "full_name": "QWEEEEfds QWEWEdf",
        "occupation": "QWqwef22",
        "email": "wqefqwefw@gmail.com",
        "created_at": null,
        "status": true
    },
    {
        "id": 41,
        "full_name": "QWEEEEfds QWEWEdf",
        "occupation": "QWqwef22qwe",
        "email": "wqefqweqwefw@gmail.com",
        "created_at": null,
        "status": true
    },
    {
        "id": 42,
        "full_name": "QWEEEEfds QWEWEdf",
        "occupation": "QWqwef22qwe",
        "email": "wqefqweqwwe2efw@gmail.com",
        "created_at": null,
        "status": true
    },
    {
        "id": 43,
        "full_name": "QWEEEEfdsAFAS QWEWEdfDFSAD",
        "occupation": "QWqwef22qwe",
        "email": "23E23EWQE@gmail.com",
        "created_at": null,
        "status": true
    },
    {
        "id": 44,
        "full_name": "QWEEEEfdsAFAS QWEWEdfDFSAD",
        "occupation": "QWqwef22qwe",
        "email": "23E23EWQasdE@gmail.com",
        "created_at": null,
        "status": true
    },
    {
        "id": 45,
        "full_name": "QWEEEEfdsAFAS QWEWEdfDFSAD",
        "occupation": "QWqwef22qweasd",
        "email": "asdasd@gmail.com",
        "created_at": null,
        "status": true
    },
    {
        "id": 46,
        "full_name": "eqwasd easd",
        "occupation": "QWqwef22qweasd",
        "email": "dsada@gmail.com",
        "created_at": null,
        "status": true
    },
    {
        "id": 47,
        "full_name": "eqwasd easd",
        "occupation": "QWqwef22qweasd",
        "email": "ijij@gmail.com",
        "created_at": null,
        "status": true
    },
    {
        "id": 48,
        "full_name": "asdf asdfasdf",
        "occupation": "wqre",
        "email": "qwefawqe@gmail.comq",
        "created_at": null,
        "status": true
    },
    {
        "id": 49,
        "full_name": "asdfasdf asdffas",
        "occupation": "afsdf",
        "email": "asdfasafd@gmail.com",
        "created_at": null,
        "status": true
    },
    {
        "id": 50,
        "full_name": "John Doe",
        "occupation": "engineer",
        "email": "johndoe230895@gmail.com",
        "created_at": "2025-01-27T19:23:46.673Z",
        "status": true
    },
    {
        "id": 51,
        "full_name": "rodrigo herrera",
        "occupation": "developer",
        "email": "rodrigo230895@gmail.com",
        "created_at": "2025-01-28T01:03:00.390Z",
        "status": true
    }
]

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {
    id: 'full_name',
    numeric: false,
    disablePadding: true,
    label: 'User',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: true,
    label: 'Email',
  },
  {
    id: 'created_at',
    numeric: false,
    disablePadding: false,
    label: 'Last seen',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  }
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
        
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    console.log('clicked')
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(() => {
        // console.log('Recalculating visibleRows...');
        // console.log('Order:', order);
        // console.log('OrderBy:', orderBy);
        // console.log('Page:', page);
        // console.log('RowsPerPage:', rowsPerPage);
      
        const sortedRows = [...rows].sort(getComparator(order, orderBy));
        console.log('Sorted Rows:', sortedRows , 'order',order, 'orderBy', orderBy);
      
        const paginatedRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
        console.log('Paginated Rows:', paginatedRows);
      
        return paginatedRows;
      }, [order, orderBy, page, rowsPerPage]);


 
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                console.log('x', row)
                const isItemSelected = selected.includes(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.full_name}
                      {row.occupation}
                      
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.created_at}</TableCell>
                    <TableCell align="right">{row.status ? 'OK': 'Banned'}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
