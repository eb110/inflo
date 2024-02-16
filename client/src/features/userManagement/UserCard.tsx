import { ListItem, ListItemText, TableCell, TableRow } from "@mui/material";
import { User } from "../../app/models/user";

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
      </TableRow>
    </>
  );
};
