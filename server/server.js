const user = require("./users.js")
const express = require("express");
var requestIp = require('request-ip');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/about.json", (req, res) => {
  var ip = requestIp.getClientIp(req);
  if (ip.substr(0, 7) == "::ffff:") {
    ip = ip.substr(7)
  }  
  var time = Math.floor(new Date().getTime() / 1000)
  const jso = {
    client: {ip},
    server: {
      current_time: time,
      services: [{
        "name": "Covid 19",
        "widgets": [{
          "name": "Nombre de cas",
          "description ": "Affiche le nombre de cas pour le pays",
          "params": [{
            "name": "Pays",
            "type": "string"
          }, {
            "name": "largeur",
            "type": "string"
          }]
          },{
          "name": "Nombre de mort",
          "description ": "Affiche le nombre de morts a cause du covid pour le pays",
          "params": [{
            "name": "Pays",
            "type": "string"
          }, {
            "name": "largeur",
            "type": "string"
          }]
        }]
      }, {
        "name" : "Prévision Météo",
        "widgets" : [{
          "name": "Aujourd'hui",
          "description": "affiche la météo du jour pour la ville",
          "params": [{
            "name": "ville",
            "type": "string"
          }, {
            "name": "largeur",
            "type": "string"
          }]
        }, {
          "name": "Demain",
          "description": "affiche la météo de demain pour la ville",
          "params": [{
            "name": "ville",
            "type": "string"
          }, {
            "name": "largeur",
            "type": "string"
          }]
        }, {
          "name": "Après Demain",
          "description": "affiche la météo d'après demain pour la ville",
          "params": [{
            "name": "ville",
            "type": "string"
          }, {
            "name": "largeur",
            "type": "string"
          }]
        }, {
          "name": "Dans 3 jours",
          "description": "affiche la météo dans 3 jours pour la ville",
          "params": [{
            "name": "ville",
            "type": "string"
          }, {
            "name": "largeur",
            "type": "string"
          }]
        }]
      }, {
        "name" : "Drapeau Pays",
        "widget": [{
          "name" : "Image du drapeau",
          "description": "Affiche le drapeau du pays",
          "params": [{
            "name": "Pays",
            "type": "string"
          }, {
            "name": "largeur",
            "type": "string"
          }]
        }]
      }, {
        "name": "Découpage géographique",
        "widgets": [{
          "name" : "Population par ville",
          "description": "Affiche le nombre d'haibtants d'une ville",
          "params": [{
            "name": "Ville",
            "type": "string"
          }, {
            "name": "largeur",
            "type": "string"
          }]
        }, {
          "name" : "Nom département depuis une ville",
          "description": "affiche le département de la ville",
          "params": [{
            "name": "Ville",
            "type": "string"
          }, {
            "name": "largeur",
            "type": "string"
          }]
        }, {
          "name" : "Nom département depuis son code",
          "description": "Affiche le departement dont le code est saisi",
          "params": [{
            "name": "Code du département",
            "type": "Int"
          }, {
            "name": "largeur",
            "type": "string"
          }]
        }, {
          "name" : "Nom région depuis une ville",
          "description": "Indique la région dans laquelle est située la ville",
          "params": [{
            "name": "Ville",
            "type": "string"
          }, {
            "name": "largeur",
            "type": "string"
          }]
        }, {
          "name" : "Nom région depuis un nom de département",
          "description": "affiche la region dans laquelle est situé le département",
          "params": [{
            "name": "Département",
            "type": "string"
          }, {
            "name": "largeur",
            "type": "string"
          }]
        }, {
          "name" : "Nom région depuis un code de département",
          "description": "affiche la region dans laquelle est situé le département",          
          "params": [{
            "name": "Code du département",
            "type": "int"
          }, {
            "name": "largeur",
            "type": "string"
          }]
        }]
      }]
    }
  }
  res.status(200).json(jso);
});

app.post("/register", user.createUser);

app.post("/login", user.login);

app.listen(8080, () => {
  console.log("Listening on port 8080.");
});
