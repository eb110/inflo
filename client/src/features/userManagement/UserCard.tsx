import { Button, TableCell, TableRow } from "@mui/material";
import { User } from "../../app/models/user";
import { Link } from "react-router-dom";

interface Props {
  user: User;
}

export const UserCard = ({ user }: Props) => {
  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" scope="row">
          {user.id}
        </TableCell>
        <TableCell align="right">{user.forename}</TableCell>
        <TableCell align="right">{user.surname}</TableCell>
        <TableCell align="right">{user.email}</TableCell>
        <TableCell align="right">{"" + user.isActive}</TableCell>
        <TableCell align="right">{user.dateOfBirth}</TableCell>
        <TableCell align="right">
          <Button component={Link} to={`/users/${user.id}`} size='small'>View</Button>
        </TableCell>
      </TableRow>
    </>
  );
};
