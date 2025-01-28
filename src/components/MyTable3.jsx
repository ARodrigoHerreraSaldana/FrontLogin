import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import BasicModal from "./Modal.jsx";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  Checkbox,
  IconButton,
  Tooltip,
  FormControlLabel,
  Switch,
  Button
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import "./myTable3.css";
import MyInput from './MyInputs.jsx';
console.log('zczxcvz')


const fetchTable = async () => {
  console.log('paso1')
  try {
    const response = await fetch("http://localhost:5006/lastLogin");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    console.log('result',result)
    let rows = result.map((element, index) => {
      return {
        id: index + 1,
        full_name: element.full_name,
        occupation: element.occupation,
        email: element.email,
        logged: element.created_at == null ? "-" : element.created_at,
        status: element.status ? "OK" : "NO",
      };
    });
    console.log(rows);
    return rows;
  } catch (err) {
    console.error(err.message);
  }
};

const setFalse = async (data) => {
  try {
    console.log("x");
    const response = await fetch("http://localhost:5006/setFalse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        array: data,
      }),
    });
    const responseJSON = await response.json();
    if (response.status == "200") {
      return responseJSON;
    }
    if (response.status == "400") {
      return responseJSON;
    }
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error("There was an error!", error);
  }
};


const setTrue = async (data) => {
  try {
    console.log("x");
    const response = await fetch("http://localhost:5006/setTrue", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        array: data,
      }),
    });
    const responseJSON = await response.json();
    if (response.status == "200") {
       return responseJSON
    }
    if (response.status == "400") {
      return responseJSON
    }
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error("There was an error!", error);
  }
};


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
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {
    id: "full_name",
    numeric: false,
    disablePadding: true,
    label: "User",
  },
  {
    id: "email",
    numeric: false,
    disablePadding: true,
    label: "email",
  },
  {
    id: "logged",
    numeric: false,
    disablePadding: false,
    label: "logged",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "status",
  },

];


function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    selected
  } = props;


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
              "aria-label": "select all users",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "center" : "center"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              <Typography> {headCell.label}</Typography>

              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
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
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
};





function EnhancedTableToolbar(props) {
  const { numSelected, selected, onButtonClick} = props;


  
  const handleStatusClick = async (obj) => {
    console.log('zcdzdvsdv')
    onButtonClick(obj); // Send the input value to the parent
  };

  // const handleStatusClick = async (e) =>{
  //   console.log('scdcasd')
  //   console.log(`Button clicked for row with id: ${e}`);
  //   await setFalse(e)
  
  // }
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 40%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Users
        </Typography>
      )}
      {numSelected > 0 ? (
        <div>
        <Tooltip title="Delete" onClick={()=>{handleStatusClick({data:selected, type:1})}}>
          <IconButton   color="secondary"> 
             Delete
            <DeleteIcon  />
          </IconButton>
        </Tooltip>

        <Tooltip title="Add"  onClick={()=>{handleStatusClick({data:selected, type:2})}}>
          <IconButton   color="primary"> 
            Add
            <PersonAddIcon />
          </IconButton>
        </Tooltip>
        
        </div>
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
  selected: PropTypes.number.isRequired,
  onButtonClick:PropTypes.func.isRequired
};

export default function EnhancedTable2() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("email");
  const [selected, status] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows,setRows]=React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [isFetchComplete, setIsFetchComplete] = React.useState(false);
  const [message, setMessage] = React.useState('Button not clicked');
  const [childData, setChildData] = React.useState('');
  
  const childRef = React.useRef();
 const inputref=React.useRef();

  const handleModalFunctions = (text,type) => {
    console.log('entre a handleModalFunctions')
    console.log('childRef.current', childRef.current)
    if (childRef.current) {
      if(type==1){
      childRef.current.modalMethodOpen(text);
      }
      else
      {
        childRef.current.modalMethodOpen(text);
      }
    }
  }

  
  const handleButtonClickChild = async (obj) => {
    setMessage('Button was clicked!');
    console.log('data del child', obj.data , obj.type)

    if(obj.type==2)
    {
      let response= await setTrue(obj.data)
      console.log('response', JSON.stringify(response.response))
      handleModalFunctions(response.response || 'unknown message',1)
    }
    else if(obj.type==1)
    {
      let response=await setFalse(obj.data)
      console.log('response', JSON.stringify(response))
      handleModalFunctions(response.response || 'unknown message',1)

    }
    // await setFalse(data)
    const result = await fetchTable();
    // console.log('result', result)
    setRows(result);
  };

  //
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchTable();
        console.log('result', result)
        setRows(result);
        setLoading(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
        setIsFetchComplete(true);
      }
    };

    fetchData();
  }, []); 

console.log(rows)

const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.email);
      console.log('newSelected', newSelected)
      status(newSelected);
      return;
    }
    status([]);
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
        selected.slice(selectedIndex + 1)
      );
    }
    console.log(newSelected)
    status(newSelected);
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
    if (isFetchComplete) {
    const sortedRows = [...rows].sort(getComparator(order, orderBy));
    console.log("Sorted Rows:", sortedRows, "order", order, "orderBy", orderBy);

    const paginatedRows = sortedRows.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
    console.log("Paginated Rows:", paginatedRows);
    return paginatedRows;
  }
  else
  {
    return []
  }
  }, [isFetchComplete,rows,order, orderBy, page, rowsPerPage]);


// efect that changes rows
React.useEffect(() => {
  console.log('Rows have been updated:', rows);
}, [rows]); 

function handleClickExperiment() {
  console.log('inputref.current', inputref.current)
  inputref.current.focus();
  // This won't work because the DOM node isn't exposed:
  // ref.current.style.opacity = 0.5;
}


  return (
    <>
  <BasicModal text='hello this is my modal' ref={childRef}/>
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} selected={selected} onButtonClick={handleButtonClickChild} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              selected={selected}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length} />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = selected.includes(row.email);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.email)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.email}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }} />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      <Typography className="fullName">
                        {row.full_name}
                      </Typography>
                      <Typography className="occupation">
                        {row.occupation}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.logged}</TableCell>
                    <TableCell align="right">{row.status}</TableCell>

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
          onRowsPerPageChange={handleChangeRowsPerPage} />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding" />
    </Box>
    </>
  );
}
