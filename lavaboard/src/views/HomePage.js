import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import nextId from "react-id-generator";
import { setPrefix } from "react-id-generator";
import Draggable from "react-draggable";

//import component

//import MUI
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconLogout from '@mui/icons-material/Logout';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(2),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const HeaderHomePage = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

setPrefix("");

export default function HomePage() {
    const theme = useTheme();
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

    //drawer
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const deleteWidget = (index) => {
        const data = widget.filter(i => i.id !== index)
        setWidget(data);
    }

    //dialogue
    const [openDialogue, setOpenDialogue] = React.useState(false);
    const handleClickOpen = () => {
        setOpenDialogue(true);
    };
    const handleClose = () => {
        setOpenDialogue(false);
    };

    //forms dialogue
    const [values, setValues] = React.useState({
        couleur: "",
        text: "",
        largeur: "",
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const confirmForm = () => {
        setOpenDialogue(false);
        setWidget(widget.concat({ id: nextId(), color: values.couleur, name: values.text, witdh: values.largeur }));
        values.couleur = "";
        values.text = "";
        values.largeur = "";
    };

    const [widget, setWidget] = useState([{ id: nextId(), color: "blue", name: "hello", witdh: "30" }, { id: nextId(), color: "red", name: "world", witdh: "5" }, { id: nextId(), color: "green", name: "coucou", witdh: "40" }, { id: nextId(), color: "blue", name: "hello", witdh: "25" }, { id: nextId(), color: "red", name: "world", witdh: "10" }, { id: nextId(), color: "green", name: "coucou", witdh: "30" }])

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <HeaderHomePage style={{ color: "#fdd5b1", backgroundColor: "black" }} position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} style={{ fontWeight: "bold" }}>
                        LAVABOARD
                    </Typography>
                    <Button style={{marginRight: 10}} variant="outlined" color="inherit" onClick={handleClick}>Profil</Button>
                </Toolbar>
            </HeaderHomePage>
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
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    COVID 19
                    {['Cas par jour', "Taux d'incidence", 'Taux de vaccination'].map((text, index) => (
                        <ListItem button key={text} onClick={handleClickOpen}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    Météo
                    {['Prévision'].map((text, index) => (
                        <ListItem button key={text} onClick={handleClickOpen}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    Horloge mondiale
                    {['Heure', "Différence d'heure"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon onClick={handleClickOpen}>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main style={{background:"black", height:"100vh"}} open={open}>
                <DrawerHeader />
                <Box style={{background:"#fdd5b1", display: "flex", flexWrap: 'wrap', flexDirection: 'row', borderRadius:"20px", padding:"15px"}}>
                    {widget.map((item, index) => (
                        <Draggable>
                            <Box key={index} style={{ width: item.witdh + "%", height: 290, backgroundColor: item.color }}>
                                {item.name}
                                <IconButton aria-label="delete" onClick={() => deleteWidget(item.id)}>
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton aria-label="delete">
                                    <MoreHorizIcon />
                                </IconButton>
                            </Box>
                        </Draggable>
                    ))}
                </Box>
                <div>
                    <Dialog open={openDialogue} onClose={handleClose}>
                        <DialogTitle>Subscribe</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                To subscribe to this website, please enter your email address here. We
                                will send updates occasionally.
                            </DialogContentText>
                            <FormControl>
                                <InputLabel htmlFor="component-outlined">couleur</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={values.couleur}
                                    onChange={handleChange("couleur")}
                                    label="couleur"
                                />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="component-outlined">text</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={values.text}
                                    onChange={handleChange("text")}
                                    label="text"
                                />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="component-outlined">Largeur</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={values.largeur}
                                    onChange={handleChange("largeur")}
                                    label="largeur"
                                    endAdornment={<InputAdornment position="end">%</InputAdornment>}
                                />
                            </FormControl>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={confirmForm}>Subscribe</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Main>
        </Box>
    );
}