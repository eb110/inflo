import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { User } from "../../app/models/user";
import { UserCard } from "./UserCard";

interface Props {
  users: User[];
}

export const UserList = ({users}: Props) => {
  const addUser = () => console.log("user list button");

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{color: 'primary.main'}}>Id</TableCell>
              <TableCell sx={{color: 'primary.main'}} align="right">Forename</TableCell>
              <TableCell sx={{color: 'primary.main'}} align="right">Surname</TableCell>
              <TableCell sx={{color: 'primary.main'}} align="right">Email</TableCell>
              <TableCell sx={{color: 'primary.main'}} align="right">IsActive</TableCell>
              <TableCell sx={{color: 'primary.main'}} align="right">DOB</TableCell>
              <TableCell sx={{color: 'primary.main'}} align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <UserCard key={index} user={user} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" onClick={addUser} sx={{mt: 2}}>
        Add User
      </Button>
    </>
  );
};
