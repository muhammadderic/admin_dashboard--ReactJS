import { Link } from "react-router-dom";
import { Table, TableCell, TableContainer, TableHead, TableRow, Paper, TableBody, Checkbox, Box } from "@mui/material";
import { userList } from "../dummyData";
import "../styles/userlist.css";
import { useState } from "react";

export default function UserList() {
  const [data, setData] = useState(userList)

  const deleteHandler = (id) => {
    setData(data.filter(item => item.id !== id));
  }

  return (
    <div className="userList">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right"><Checkbox /></TableCell>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">User</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Transaction</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user) => (
              <TableRow
                key={user.id}
              >
                <TableCell align="right" component="th" scope="row">
                  <Checkbox checked={user.check ? true : false} />
                </TableCell>
                <TableCell align="right" component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell align="right">
                  <Box className="userListUser">
                    <img src={user.avatar} alt="" className="userListImg" />
                    <div>
                      {user.username}
                    </div>
                  </Box>
                </TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.status}</TableCell>
                <TableCell align="right">Rp.{user.transaction}</TableCell>
                <TableCell align="right" className="userListEdit">
                  <Link to="/user/:userId">
                    <svg xmlns="http://www.w3.org/2000/svg" className="userListEditIcon icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                      <path d="M13.5 6.5l4 4"></path>
                    </svg>
                  </Link>
                  <svg onClick={() => deleteHandler(user.id)} xmlns="http://www.w3.org/2000/svg" className="userListDeleteIcon icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 7l16 0"></path>
                    <path d="M10 11l0 6"></path>
                    <path d="M14 11l0 6"></path>
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                  </svg>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}