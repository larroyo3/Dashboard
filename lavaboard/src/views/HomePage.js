import React, { useState, useEffect} from 'react';

import nextId from "react-id-generator";
import { setPrefix } from "react-id-generator";
import Draggable from "react-draggable";
import axios from 'axios'

import "./views.css"

//import component
import Header from "../layout/Header"
import ListItemCovid from "../stores/ListWidget"

//import MUI
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';

const drawerWidth = 240;

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

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

    const [nbCovid, setValuesCovid] = React.useState({ Country: "", Deaths: 0, Confirmed: 0 });
    const [widget, setWidget] = useState([])

    const theme = useTheme();

    //api covid
    async function getDataCountry(country, filter) {
        axios.get("https://api.covid19api.com/summary")
            .then(response => {
                //console.log(response.data.Countries.find(item => item.Slug === country || item.Country === country))
                setValuesCovid(({ Country: country, Deaths: response.data.Countries.find(item => item.Slug === country || item.Country === country).TotalDeaths, Confirmed: response.data.Countries.find(item => item.Slug === country || item.Country === country).TotalConfirmed }))
            })
            .catch(err => {
                console.log(err)
            })
    }

    //drawer
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setValuesCovid({Country: "", Deaths: 0, Confirmed: 0})
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
    const handleClickOpen = (title, image, filter) => {
        values.title = title;
        values.image = image
        values.filter = filter
        setOpenDialogue(true);
    };
    const handleClose = () => {
        setOpenDialogue(false);
    };

    //forms dialogue
    const [values, setValues] = React.useState({
        largeur: "",
        country: "",
        title: "",
        filter: "",
        image: null,
        number: 0
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    function confirmForm(){
        //getDataCountry(values.country);
        console.log(nbCovid)
        console.log(nbCovid.stringify)
        if (nbCovid.Confirmed !== 0) {
        setWidget(widget.concat({ id: nextId(), country: values.country, witdh: values.largeur, title: values.title, image: values.image, number: values.filter === "Deaths" ? nbCovid.Deaths : nbCovid.Confirmed }));
        }
        values.country = "";
        values.largeur = "";
        values.title = "";
        values.image = null;
        values.number = 0;
        values.filter = ""
        setOpenDialogue(false);
    }

    useEffect(() => {
        confirmForm()
    }, [nbCovid])

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
                    <Header />
                </Toolbar>
            </HeaderHomePage>
            <Drawer
                PaperProps={{
                    sx: {
                        backgroundColor: "#fdd5b1",
                        color: "black",
                    }
                }}
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
                <Box style={{ margin: "10px" }}>
                    <List>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} style={{ fontWeight: "bold", marginBottom: "10px" }}>
                            Covid 19
                        </Typography>
                        {ListItemCovid.map((item, id) => (
                            <ListItem className="listwidget" button key={id} onClick={() => handleClickOpen(item.widgetTitle, item.image, item.filter)}>
                                <ListItemIcon className="listicon">
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
            <div>
                <Dialog PaperProps={{
                    style: {
                        borderRadius: "20px",
                        backgroundColor: '#fdd5b1',
                        color: "black",
                        boxShadow: 'none',
                    },
                }} TransitionComponent={Transition} open={openDialogue} onClose={handleClose}>
                    <DialogTitle>Entre tes paramètres</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Pays"
                            type="email"
                            fullWidth
                            variant="outlined"
                            value={values.country}
                            onChange={handleChange("country")}
                        />
                        <FormControl style={{ marginTop: "20px" }}>
                            <InputLabel htmlFor="component-outlined">Largeur</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                value={values.largeur}
                                onChange={handleChange("largeur")}
                                label="largeur"
                                endAdornment={<InputAdornment position="end">%</InputAdornment>}
                            />
                        </FormControl >
                    </DialogContent>
                    <DialogActions>
                        <Button style={{ color: "red" }} onClick={handleClose}>Annuler</Button>
                        <Button onClick={() => {getDataCountry(values.country)}}>Confirmer</Button>
                    </DialogActions>
                </Dialog>
            </div>
            <Main style={{ background: "#fdd5b1", height: "100vh" }} open={open}>
                <DrawerHeader />
                <Box className="boxWidgets">
                    {widget.map((item, index) => (
                        <Draggable>
                            <Box key={index} className="boxWidget" style={{ width: item.witdh + "%" }}>
                                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} style={{ fontWeight: "bold", paddingRight:"30px", zIndex: 10 }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} style={{ fontWeight: "bold", paddingRight:"30px", zIndex: 10 }}>
                                    {item.country}
                                </Typography>
                                <IconButton className="btn" aria-label="delete" onClick={() => deleteWidget(item.id)}>
                                    <DeleteIcon style={{color:"red"}}/>
                                </IconButton>
                                <Divider/>
                                <Typography variant="h2" component="div" sx={{ flexGrow: 1 }} style={{ fontWeight: "bold", paddingTop:"20px" }}>
                                {item.number}
                                </Typography>
                                {item.image}
                                {/* <IconButton aria-label="delete">
                                    <MoreHorizIcon />
                                </IconButton> */}
                            </Box>
                        </Draggable>
                    ))}
                </Box>
            </Main>
        </Box>
    );
}