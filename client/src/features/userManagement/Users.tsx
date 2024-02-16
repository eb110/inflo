import { useEffect, useState } from "react";
import { UserList } from "./UserList"
import { User } from "../../app/models/user";

export const Users = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
      fetch("http://localhost:5000/api/users")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }, []);
    return (
        <>
            <UserList users={users}/>
        </>
    )
}