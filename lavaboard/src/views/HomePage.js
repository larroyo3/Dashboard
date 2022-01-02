import React, { useState, useEffect } from 'react';

import nextId from "react-id-generator";
import { setPrefix } from "react-id-generator";
import Draggable from "react-draggable";
import axios from 'axios'

import "./views.css"

//import component
import Header from "../layout/Header"
import ListServiceItem from "../stores/ListWidget"
import CountryList from "../stores/CountryList"

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

    const [valueAPI, setValuesAPI] = React.useState({resultCallAPI: 0});
    const [widget, setWidget] = useState([])

    const theme = useTheme();

    //api covid
    async function getDeathCovidByCountry(selectedParameter) {
        axios.get("https://api.covid19api.com/summary")
            .then(response => {
                //console.log(response.data.Countries.find(item => item.Slug === country || item.Country === country))
                setValuesAPI(({resultCallAPI: response.data.Countries.find(item => item.Slug === selectedParameter || item.Country === selectedParameter).TotalDeaths}))
            })
            .catch(err => {
                console.log(err)
            })
    }
    async function getConfirmedCovidByCountry(selectedParameter) {
        axios.get("https://api.covid19api.com/summary")
            .then(response => {
                //console.log(response.data.Countries.find(item => item.Slug === country || item.Country === country))
                setValuesAPI(({resultCallAPI: response.data.Countries.find(item => item.Slug === selectedParameter || item.Country === selectedParameter).TotalConfirmed}))
            })
            .catch(err => {
                console.log(err)
            })
    }
    function getIMGWeatherByTown(selectedParameter, period) {
        var town = "https://www.prevision-meteo.ch/uploads/widget/" + selectedParameter + period + ".png";
        values.image =<a href="https://www.prevision-meteo.ch/meteo/localite/paris"><img alt="meteo" src={town} width="650" height="250" /></a>
        setValuesAPI(({resultCallAPI: null}))
    }
    function getIMGFlagByCountry(selectedParameter) {
        selectedParameter = selectedParameter.charAt(0).toUpperCase() + selectedParameter.slice(1);
        var cnd = CountryList.find(item => item.name === selectedParameter);
        var country = "https://flagcdn.com/" + cnd.code + ".svg";
        values.image = <img src={country} width="500" alt="Pays"/>
        setValuesAPI(({resultCallAPI: null}))
    }
    async function getPopulationByTown(town) {
        axios.get("https://geo.api.gouv.fr/communes?nom=" + town + "&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre")
        .then(response => {
            values.selectedParameter = response.data[0].nom
            setValuesAPI(({resultCallAPI: response.data[0].population}))
        })
        .catch(err => {
            console.log(err)
        })
    }
    async function getDepartmentByTown(town) {
        axios.get("https://geo.api.gouv.fr/communes?nom=" + town + "&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre")
        .then(response => {
            values.selectedParameter = response.data[0].nom
            var code = response.data[0].codeDepartement
            axios.get("https://geo.api.gouv.fr/departements?code=" + code + "&fields=")
            .then(response => {
                setValuesAPI(({resultCallAPI: response.data[0].nom}))
            })
            .catch(err => {
                console.log(err)
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
    async function getDepartmentByCode(code) {
        axios.get("https://geo.api.gouv.fr/departements?code=" + code + "&fields=")
            .then(response => {
                setValuesAPI(({resultCallAPI: response.data[0].nom}))
            })
            .catch(err => {
                console.log(err)
            })
    }
    async function getDepartmentByName(departement) {
        axios.get("https://geo.api.gouv.fr/departements?nom=" + departement + "&fields=")
            .then(response => {
                values.selectedParameter = response.data[0].nom
                setValuesAPI(({resultCallAPI: response.data[0].code}))
            })
            .catch(err => {
                console.log(err)
            })
    }
    async function getRegionByTown(town) {
        axios.get("https://geo.api.gouv.fr/communes?nom=" + town + "&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre")
        .then(response => {
            values.selectedParameter = response.data[0].nom
            var code = response.data[0].codeRegion
            axios.get("https://geo.api.gouv.fr/regions?code=" + code + "&fields=nom,code")
            .then(response => {
                setValuesAPI(({resultCallAPI: response.data[0].nom}))
            })
            .catch(err => {
                console.log(err)
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
    async function getRegionByDepartementName(departement) {
        axios.get("https://geo.api.gouv.fr/departements?nom=" + departement + "&fields=")
        .then(response => {
            values.selectedParameter = response.data[0].nom
            var code = response.data[0].codeRegion
            axios.get("https://geo.api.gouv.fr/regions?code=" + code + "&fields=nom,code")
            .then(response => {
                setValuesAPI(({resultCallAPI: response.data[0].nom}))
            })
            .catch(err => {
                console.log(err)
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
    async function getRegionByDepartementCode(code) {
        axios.get("https://geo.api.gouv.fr/departements?code=" + code + "&fields=")
        .then(response => {
            values.selectedParameter = response.data[0].nom
            var code = response.data[0].codeRegion
            axios.get("https://geo.api.gouv.fr/regions?code=" + code + "&fields=nom,code")
            .then(response => {
                setValuesAPI(({resultCallAPI: response.data[0].nom}))
            })
            .catch(err => {
                console.log(err)
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    //drawer
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setValuesAPI({resultCallAPI: 0})
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
    const handleClickOpen = (title, image, filterAPI, formParameter, id) => {
        values.selectedWidget = id;
        values.title = title;
        values.image = image;
        values.filterAPI = filterAPI;
        values.formParameter = formParameter;
        setOpenDialogue(true);
    };
    const handleClose = () => {
        setOpenDialogue(false);
    };

    //forms dialogue
    const [values, setValues] = React.useState({
        largeur: "",
        selectedParameter: "",
        selectedWidget: "",
        title: "",
        filterAPI: "",
        formParameter: "",
        image: null,
        number: 0
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    function confirmForm() {
        //getDeathCovidByCountry(values.selectedParameter);
        console.log(valueAPI)
        console.log(valueAPI.stringify)
        if (valueAPI.resultCallAPI !== 0) {
            setWidget(widget.concat({ id: nextId(), selectedParameter: values.selectedParameter, witdh: values.largeur, title: values.title, image: values.image, number: valueAPI.resultCallAPI}));
        }
        values.selectedParameter = "";
        values.selectedWidget = "";
        values.largeur = "";
        values.title = "";
        values.image = null;
        values.number = 0;
        values.filterAPI = "";
        values.formParameter = "";
        setOpenDialogue(false);
    }

    useEffect(() => {
        confirmForm()
    }, [valueAPI])

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
{/* Header */}
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
{/* drawer */}
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
{/* liste widgets / services */}
                {ListServiceItem.map((itemService, idService) => (
                <Box key={idService} style={{ margin: "10px" }}>
                        <List>
                            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} style={{ fontWeight: "bold", marginBottom: "10px" }}>
                                {itemService.service}
                            </Typography>
                            {itemService.childWidget.map((itemWidget, idWidget) => (
                                <ListItem className="listwidget" button key={idWidget} onClick={() => handleClickOpen(itemWidget.widgetTitle, itemWidget.image, itemWidget.filterAPI, itemWidget.formParameter, itemWidget.id)}>
                                    <ListItemIcon className="listicon">
                                        {itemWidget.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={itemWidget.selectionTitle} />
                                </ListItem>
                            ))}
                        </List>
                    <Divider />
                </Box>
                ))}
            </Drawer>
            <div>
{/* parametre widget */}
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
                            label={values.formParameter}
                            type="email"
                            fullWidth
                            variant="outlined"
                            value={values.selectedParameter}
                            onChange={handleChange("selectedParameter")}
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
{/* btn en fonction du widget sélectionné */}
                        <Button style={{ color: "red" }} onClick={handleClose}>Annuler</Button>
                        {
                            {
                                'death': <Button onClick={() => { getDeathCovidByCountry(values.selectedParameter) }}>Confirmer</Button>,
                                'confirmed': <Button onClick={() => { getConfirmedCovidByCountry(values.selectedParameter) }}>Confirmer</Button>,
                                't0' : <Button onClick={() => { getIMGWeatherByTown(values.selectedParameter, "_0") }}>Confirmer</Button>,
                                't1' : <Button onClick={() => { getIMGWeatherByTown(values.selectedParameter, "_1") }}>Confirmer</Button>,
                                't2' : <Button onClick={() => { getIMGWeatherByTown(values.selectedParameter, "_2") }}>Confirmer</Button>,
                                't3' : <Button onClick={() => { getIMGWeatherByTown(values.selectedParameter, "_3") }}>Confirmer</Button>,
                                'drapeau' : <Button onClick={() => { getIMGFlagByCountry(values.selectedParameter) }}>Confirmer</Button>,
                                'population' : <Button onClick={() => { getPopulationByTown(values.selectedParameter) }}>Confirmer</Button>,
                                'departementByTown' : <Button onClick={() => { getDepartmentByTown(values.selectedParameter) }}>Confirmer</Button>,
                                'departementByCode' : <Button onClick={() => { getDepartmentByCode(values.selectedParameter) }}>Confirmer</Button>,
                                'departementByName' : <Button onClick={() => { getDepartmentByName(values.selectedParameter) }}>Confirmer</Button>,
                                'regionByTown' : <Button onClick={() => { getRegionByTown(values.selectedParameter) }}>Confirmer</Button>,
                                'regionByDepartementName' : <Button onClick={() => { getRegionByDepartementName(values.selectedParameter) }}>Confirmer</Button>,
                                'regionByDepartementCode' : <Button onClick={() => { getRegionByDepartementCode(values.selectedParameter) }}>Confirmer</Button>,
                            }[values.selectedWidget]
                        }
                    </DialogActions>
                </Dialog>
            </div>
            <Main style={{ background: "#fdd5b1", height: "100vh" }} open={open}>
                <DrawerHeader />
{/* affichage widget */}
                <Box className="boxWidgets">
                    {widget.map((item, index) => (
                        <Draggable>
                            <Box key={index} className="boxWidget" style={{ width: item.witdh + "%" }}>
                                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} style={{ fontWeight: "bold", paddingRight: "30px", zIndex: 10 }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} style={{ fontWeight: "bold", paddingRight: "30px", zIndex: 10 }}>
                                    {item.selectedParameter}
                                </Typography>
                                <IconButton className="btn" aria-label="delete" onClick={() => deleteWidget(item.id)}>
                                    <DeleteIcon style={{ color: "red" }} />
                                </IconButton>
                                <Divider />
                                <Typography variant="h2" component="div" sx={{ flexGrow: 1 }} style={{ fontWeight: "bold", paddingTop: "20px" }}>
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