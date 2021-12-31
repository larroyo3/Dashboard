import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import logoCovid from '../assets/logoCovid.png';
import logoMort from '../assets/logoMort.png';

const ListServiceItem = [
    {
        service: "Covid 19",
        childWidget: [
            {
                id: 'conforimed',
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
    }
];

export default ListServiceItem;