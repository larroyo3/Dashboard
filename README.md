# PRESENTATION PROJET

Projet réalisé en 2 semaines en groupes de 2 personnes dans le cadre d'Epitech. </br>
Programmation d'une application web ayant pour objectif de permettre à l'utilisateur de créer son propre dashboard en créant ses propres widgets configurables à l'aide de différents services.

# DASHBOARD DOCUMENTATION

- - - -
## DOCKER / LANCEMENT DU PROJET :

Pour lancer le projet il y a un docker-compose à la root du projet il suffit de taper la commande **sudo docker-compose up** et le lavaboard se lancera !

Il y a un service pour chaque partie du projet definie dans le docker-compose.yml. Il y a un Dockerfile pour le front et un pour le back. Celui pour le front est accessible dans le dossier lavaboard et celui pour le back est accessible dans le dossier server. L'image de MariaDB et de PHPmyadmin sont construite dans le docker-compose directement.


## BACK :

Pour le back on utilise express il y a un endpoint about.json que l'on peut get afin d'obtenir les infos sur les widgets du lavaboard en format JSON.

Il y a aussi une base de données MariaDB qui permet de faire un système d'inscription et de connection, quand on clique sur le bouton inscription:

```js
let conn
    conn = await pool.getConnection();
    var query = "SELECT `username` FROM `users` WHERE `username` = '" + req.body.username + "'";
    var rows = await conn.query(query);
    if (rows[0] != undefined) {
        conn.end()
        res.status(400).json({err:"user already exists"})
        res.send()
    } else {
        query = "INSERT INTO `users` (username, password) VALUES ('" + req.body.username + "','" + req.body.pass + "')";
        rows = await conn.query(query);
        conn.end();
        res.status(200).json({err:"registered"})
        res.send()
    }
}
```
quand on clique sur le bouton connection:

```js
let conn
    conn = await pool.getConnection();
    var query = "SELECT `username`, `password` FROM `users` WHERE `username` = '" + req.body.username + "'";
    var row = await conn.query(query);
    conn.end()
    if (row[0] == undefined) {
        console.log('no username')
        res.status(400).json({error: 'no username matching'})
        res.send()
        return;
    }
    else if (row[0].password == req.body.pass) {
        console.log('good')
        res.status(200).json({username:req.body.user, pass:req.body.pass})
        res.send()
        return;
    }
    else {
        console.log('wrong pass')
        res.status(400).json({error: 'password is not matching'})
        res.send()
        return;
    }
}
```

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
