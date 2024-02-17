import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { User } from "../../app/models/user";

export const UserDetails = () => {

    const {id} = useParams<{id: string}>();
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/users/${id}`)
        .then(res => setUser(res.data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }, [id])

    if(loading) return <h3>loading...</h3>
    if(!user) return <h3>user not found</h3>

    return (
        <>
            <Grid container spacing={6}>
                <Grid item xs={6}>
                    <img src={'https://picsum.photos/200'} alt={user.surname} style={{width: '100%'}} />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h3'>User Details</Typography>
                    <Divider sx={{mb: 2}} />
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Forename</TableCell>
                                    <TableCell>{user.forename}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Surname</TableCell>
                                    <TableCell>{user.surname}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Email</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>DOB</TableCell>
                                    <TableCell>{user.dateOfBirth}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>IsActive</TableCell>
                                    <TableCell>{'' + user.isActive}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    )
}