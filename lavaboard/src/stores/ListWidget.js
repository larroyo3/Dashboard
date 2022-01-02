import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import logoCovid from '../assets/logoCovid.png';
import logoMort from '../assets/logoMort.png';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import FlagIcon from '@mui/icons-material/Flag';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PublicIcon from '@mui/icons-material/Public';

const ListServiceItem = [
    {
        service: "Covid 19",
        childWidget: [
            {
                id: 'confirmed',
                selectionTitle: 'Nombre de cas',
                widgetTitle: "Nombre de cas depuis toujours : ",
                icon: <CoronavirusIcon />,
                image: <img src={logoCovid} alt="Logo Covid" />,
                filterAPI: "Confirmed",
                formParameter: "Pays"
            },
            {
                id: 'death',
                selectionTitle: 'Nombre de mort',
                widgetTitle: "Nombre de mort depuis toujours : ",
                icon: <AirlineSeatFlatIcon />,
                image: <img src={logoMort} alt="Logo Mort" />,
                filterAPI: "Deaths",
                formParameter: "Pays"
            }
        ]
    },
    {
        service : "Prévision Météo",
        childWidget :
        [
            {
                id: 't0',
                selectionTitle: "Aujourd'hui",
                widgetTitle: "Prévision météo :",
                icon: <NightsStayIcon />,
                image: null,
                filterAPI: "",
                formParameter: "Ville"
            },
            {
                id: 't1',
                selectionTitle: "Demain",
                widgetTitle: "Prévision météo :",
                icon: <NightsStayIcon />,
                image: null,
                filterAPI: "",
                formParameter: "Ville"
            },
            {
                id: 't2',
                selectionTitle: "Après demain",
                widgetTitle: "Prévision météo :",
                icon: <NightsStayIcon />,
                image: null,
                filterAPI: "",
                formParameter: "Ville"
            },
            {
                id: 't3',
                selectionTitle: "Dans 3 jours",
                widgetTitle: "Prévision météo :",
                icon: <NightsStayIcon />,
                image: null,
                filterAPI: "",
                formParameter: "Ville"
            }
        ]
    },
    {
        service : "Drapeau Pays",
        childWidget :
        [
            {
                id: 'drapeau',
                selectionTitle: "Image du drapeau",
                widgetTitle: "Drapeau :",
                icon: <FlagIcon />,
                image: null,
                filterAPI: "",
                formParameter: "Pays"
            }
        ]
    },
    {
        service : "Découpage géographique",
        childWidget :
        [
            {
                id: 'population',
                selectionTitle: "Population par ville",
                widgetTitle: "Population :",
                icon: <SupervisorAccountIcon />,
                image: null,
                filterAPI: "",
                formParameter: "Ville"
            },
            {
                id: 'departementByTown',
                selectionTitle: "Nom département depuis une ville",
                widgetTitle: "Département :",
                icon: <ApartmentIcon />,
                image: null,
                filterAPI: "",
                formParameter: "Ville"
            },
            {
                id: 'departementByCode',
                selectionTitle: "Nom département depuis son code",
                widgetTitle: "Département :",
                icon: <ApartmentIcon />,
                image: null,
                filterAPI: "",
                formParameter: "Code du département"
            },
            {
                id: 'departementByName',
                selectionTitle: "Code département depuis son nom",
                widgetTitle: "Département :",
                icon: <ApartmentIcon />,
                image: null,
                filterAPI: "",
                formParameter: "Nom du département"
            },
            {
                id: 'regionByTown',
                selectionTitle: "Nom région depuis une ville",
                widgetTitle: "Ville :",
                icon: <PublicIcon />,
                image: null,
                filterAPI: "",
                formParameter: "Ville"
            },
            {
                id: 'regionByDepartementName',
                selectionTitle: "Nom région depuis un nom de département",
                widgetTitle: "Département :",
                icon: <PublicIcon />,
                image: null,
                filterAPI: "",
                formParameter: "Nom du département"
            },
            {
                id: 'regionByDepartementCode',
                selectionTitle: "Nom région depuis un code de département",
                widgetTitle: "Département :",
                icon: <PublicIcon />,
                image: null,
                filterAPI: "",
                formParameter: "Code du département"
            }
        ]
    }
];

export default ListServiceItem;