import * as React from 'react';
import { useNavigate } from "react-router-dom";

//import MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconLogout from '@mui/icons-material/Logout';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';

export default function DiscoverHeader() {

    let navigate = useNavigate();

    //menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} style={{ fontWeight: "bold" }}>
                LAVABOARD
            </Typography>
            <Button style={{position:"absolute", right:"20px", top:"15px"}} variant="outlined" color="inherit" onClick={handleClick}>Profil</Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleCloseMenu}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => navigate("/")}>
                    <ListItemIcon>
                        <IconLogout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </Box>
    );
}