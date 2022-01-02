import axios from 'axios'

export async function getPopulationByTown(town) {
    axios.get("https://geo.api.gouv.fr/communes?nom=" + town + "&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre")
    .then(response => {
        console.log(response.data)
    })
    .catch(err => {
        console.log(err)
    })
}