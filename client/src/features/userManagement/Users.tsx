import { useEffect, useState } from "react";
import { UserList } from "./UserList"
import { User } from "../../app/models/user";
import agent from "../../app/api/agent";
import { LoadingComponent } from "../../app/layout/LoadingComponent";

export const Users = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      agent.Users.list()
      .then(data => setUsers(data))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
    }, []);

    if(loading) return <LoadingComponent message='Loading Users...'/>

    return (
        <>
            <UserList users={users}/>
        </>
    )
}