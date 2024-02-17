import {
  AppBar,
  Box,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
  { title: "users", path: "/users" },
  { title: "about", path: "/about" },
  { title: "logs", path: "/logs" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const navStyles = {
  color: "inherit",
  typography: "h6",
  textDecoration: "none",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
};

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export const Header = ({ darkMode, handleThemeChange }: Props) => {
  return (
    <>
      <AppBar position="static" sx={{ mb: 3 }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box display='flex' alignItems='center'>
            <Typography variant="h6" component={NavLink} to="/" sx={navStyles}>
              INFLO-USERS
            </Typography>
            <Switch checked={darkMode} onChange={handleThemeChange} />
          </Box>

          <List sx={{ display: "flex" }}>
            {midLinks.map(({ title, path }, index) => (
              <ListItem
                component={NavLink}
                to={path}
                key={index}
                sx={navStyles}
              >
                {title.toLocaleUpperCase()}
              </ListItem>
            ))}
          </List>
          <List sx={{ display: "flex" }}>
            {rightLinks.map(({ title, path }, index) => (
              <ListItem
                component={NavLink}
                to={path}
                key={index}
                sx={navStyles}
              >
                {title.toLocaleUpperCase()}
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </AppBar>
    </>
  );
};
