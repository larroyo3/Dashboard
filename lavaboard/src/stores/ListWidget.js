import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import logoCovid from '../assets/logoCovid.png';
import logoMort from '../assets/logoMort.png';

const ListItemCovid = [
        {
            id: 'case',
            title: 'Nombre de cas',
            widgetTitle : "Nombre de cas depuis toujours : ",
            icon : <CoronavirusIcon />,
            image: <img src={logoCovid} alt="Logo Covid"/>,
            filter: "Confirmed"
        },
        {
            id: 'death',
            title: 'Nombre de mort',
            widgetTitle : "Nombre de mort depuis toujours : ",
            icon : <AirlineSeatFlatIcon />,
            image: <img src={logoMort} alt="Logo Mort"/>,
            filter: "Deaths"
        }
    ];

export default ListItemCovid;