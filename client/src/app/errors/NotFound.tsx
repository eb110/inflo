import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <Container component={Paper} sx={{ height: 400 }}>
        <Typography gutterBottom variant="h1">
          NOT FOUND 404!!!
        </Typography>
        <Divider />
        <Button fullWidth component={Link} to="/users">
          Back to users
        </Button>
      </Container>
    </>
  );
};
