import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import { HomePage } from "../../features/home/HomePage";
import { Users } from "../../features/userManagement/Users";
import { UserDetails } from "../../features/userManagement/UserDetails";
import { AboutPage } from "../../features/about/AboutPage";
import { LogsPage } from "../../features/logs/LogsPage";
import { ServerError } from "../errors/ServerError";
import { NotFound } from "../errors/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element:<HomePage />},
            {path: 'users', element:<Users />},
            {path: 'users/:id', element:<UserDetails />},
            {path: 'about', element:<AboutPage />},
            {path: 'logs', element:<LogsPage />},
            {path: 'server-error', element:<ServerError />},
            {path: 'not-found', element:<NotFound />},
            {path: '*', element: <Navigate replace to='/not-found' />}
        ]
    }
])