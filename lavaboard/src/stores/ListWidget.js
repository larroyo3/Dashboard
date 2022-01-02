import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import logoCovid from '../assets/logoCovid.png';
import logoMort from '../assets/logoMort.png';
import NightsStayIcon from '@mui/icons-material/NightsStay';

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
    }
];

export default ListServiceItem;