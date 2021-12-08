# B-DEV-500-LYN-5-1-dashboard-thibault.bordenave

# REDDITECH DOCUMENTATION

- - - -

## BACK :

## API :

Nous avons utiliser axios pour nos call API.

### COVID 19

```js
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
```

## NAVIGATION :

Nous avons utilisé **react-router**
```js
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<HomePage />} />
      <Route path="*" element={<BadURL/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
```

Nous avons utilisé **navigate** pour naviguer de page en page : 
```js
<Button className="changecolor" style={{marginRight: 20}} variant="outlined" color="inherit" onClick={ () => navigate("/register")}>S'inscrire</Button>
```

- - - -

## FRONT

Nous pouvons observer 2 couleurs principale sur notre front :
> Orange: #ff7f50
> Beige: #fdd5b1

Et notre logo

<img width="150" alt="menu" src="https://i.pinimg.com/236x/c4/e0/4e/c4e04e3e98a376661c7d2e978b2902b9.jpg">


## TECHNOLOGIES

Nous avons utilisé différente technologie:
- **Front**
    - React Js / MUI / React Router
- **Back**
    - Express JS / Axios
    
- **Docker**
- **Docker-compose**
