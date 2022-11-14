import { Box, Typography, Button } from "@mui/material";
import { UserContext } from "contexts/user";
import React from "react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  const { user } = React.useContext(UserContext);

  return (
    <Box component="main">
      <Typography variant="h2">
        Welcome, {user?.name ? user.name : "Visitor"}
        { user?.name ? <Button>Logoff</Button> : "" }
      </Typography>
      <Typography>
        {user?.name ? 
          <Link to="#">Go to our Dashboard</Link>  : 
          <Box>
            <Link to="/register">Sign Up</Link>
            <Link to="/">Sign In</Link>
          </Box>  
        }
      </Typography>
    </Box>
  );
};