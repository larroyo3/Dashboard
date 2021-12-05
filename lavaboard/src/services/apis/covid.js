import axios from 'axios'

export async function getDataCountry(country) {
    axios.get("https://api.covid19api.com/live/country/" + country + "/status/confirmed")
    .then(response => {
        console.log(response.data)
    })
    .catch(err => {
        console.log(err)
    })
}