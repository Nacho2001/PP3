import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from "@mui/material/Box";
import { Toolbar, Typography } from "@mui/material";

const MyToolbar = () => {
    return(
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        MyApp
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default MyToolbar;