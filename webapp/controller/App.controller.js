sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
    ],
    function(BaseController,JSONModel) {
      "use strict";
  
      return BaseController.extend("project6.project6.controller.App", {
        onInit() {
            var dati = [
                {
                "indice":"0",
                "id": "#126",
                "nome": "Mario Rossi ",
                "tel": "+39 7777653098",
                "ragiones": "Rossi Srl",
                "email": "mario.rossi@gmail.com",
                "fatturato": "€10.000,00",
                "piva": "IV435627182",
                "citta": "Roma",
                "nordine": "#123456788",
                "quantità": "1",
                "importo": "244,90 €",
                "dataOrdine": "29/11/2022",
                "stato": "in elaborazione",
                "state": "Warning",
                "ordini":[
                    {"key":"1"},
                    {"key":"2"},
                    {"key":"3"}
                
                ]
            },
            {
                "indice":"1",
                "id": "#127",
                "nome": "Gianni Verdi ",
                "tel": "+39 7777655463",
                "ragiones": "Fll. Verdi Srl",
                "email": "az.verdi@gmail.com",
                "fatturato": "€40.350,87",
                "piva": "IV435626453",
                "citta": "Roma",
                "nordine": "#123456789",
                "quantità": "5",
                "importo": "1.250 €",
                "dataOrdine": "30/11/2022",
                "stato": "in elaborazione", 
                "state": "Warning",
                "ordini":[
                    {"key":"4"},
                    {"key":"5"},
                    {"key":"6"},
                    {"key":"77"}
                
                ]
            },
            {
                "indice":"2",
                "id": "#128",
                "nome": "Han Solo ",
                "tel": "+39 7777659987",
                "ragiones": "LaForza Srl",
                "email": "han.solo@gmail.com",
                "fatturato": "€25.000,00",
                "piva": "IV435622213",
                "citta": "Catania",
                "ordini":[
                    {"key":"7"},
                    {"key":"8"}
                   
                
                ]
                
            },
            {
                "indice":"3",
                "id": "#129",
                "nome": "Viola Fluo ",
                "tel": "+39 7447656453",
                "ragiones": "Cosmetika spa",
                "email": "fluo3456@gmail.com",
                "fatturato": "€100.000,00",
                "piva": "IV435627761",
                "citta": "Milano",
                "ordini":[
                    {"key":"10"},
                    {"key":"11"},
                    {"key":"12"}
                
                ]
                
            },
            {
                "indice":"4",
                "id": "#130",
                "nome": "Mario Blu ",
                "tel": "+39 7777653096",
                "ragiones": "Blu Srl",
                "email": "mario.blu@gmail.com",
                "fatturato": "€10.000,00",
                "piva": "IV435627181",
                "citta": "Verona",
                "ordini":[
                    {"key":"12"},
                    {"key":"13"},
                    {"key":"14"},
                    {"key":"779"}
                
                ]
            },
            {
                "indice":"5",
                "id": "#131",
                "nome": "Gianni Gialli ",
                "tel": "+39 7777655463",
                "ragiones": "Fll. Gialli Srl",
                "email": "az.gialli@gmail.com",
                "fatturato": "€40.350,87",
                "piva": "IV435626455",
                "citta": "Perugia",
                "ordini":[
                    {"key":"15"},
                    {"key":"16"},
                    {"key":"17"}
                
                ]
            },
            {
                "indice":"6",
                "id": "#132",
                "nome": "Maria Dolores ",
                "tel": "+39 7777659981",
                "ragiones": "Mex Srl",
                "email": "maria.dolores@gmail.com",
                "fatturato": "€25.000,00",
                "piva": "IV435625213",
                "citta": "Milano",
                "ordini":[
                    {"key":"18"},
                    {"key":"19"},
                    {"key":"20"}
                
                ]
                
            },
            {
                "indice":"7",
                "id": "#133",
                "nome": "Violetta Mitreva ",
                "tel": "+39 7444556453",
                "ragiones": "M3x spa",
                "email": "mitreva@gmail.com",
                "fatturato": "€100.000,00",
                "piva": "IV434427761",
                "citta": "Foggia",
                "ordini":[
                    {"key":"21"},
                    {"key":"22"},
                    {"key":"23"}
                
                ]
                
            },
            {
                "indice":"8",
                "id": "#134",
                "nome": "Obi One ",
                "tel": "+39 7775553098",
                "ragiones": "OB1 Srl",
                "email": "o.one@gmail.com",
                "fatturato": "€10.000,00",
                "piva": "IV665627182",
                "citta": "Napoli",
                "ordini":[
                    {"key":"24"},
                    {"key":"25"},
                    {"key":"26"}
                
                ]
            },
            {
                "indice":"9",
                "id": "#135",
                "nome": "Gianni Mario ",
                "tel": "+39 7766655463",
                "ragiones": "Fll. Mario Srl",
                "email": "az.mario@gmail.com",
                "fatturato": "€40.350,87",
                "piva": "IV775626453",
                "citta": "Genova",
                "ordini":[
                    {"key":"27"},
                    {"key":"28"},
                    {"key":"29"}
                
                ]
            },
            {
                "indice":"10",
                "id": "#136",
                "nome": "Luis Suarez ",
                "tel": "+39 7777657887",
                "ragiones": "Suarez Srl",
                "email": "luis.suarez@gmail.com",
                "fatturato": "€25.000,00",
                "piva": "IV437722213",
                "citta": "Cagliari",
                "ordini":[
                    {"key":"30"},
                    {"key":"31"},
                    {"key":"32"}
                
                ]
                
            },
            {
                "indice":"11",
                "id": "#137",
                "nome": "Sabi Sabev ",
                "tel": "+39 7440056453",
                "ragiones": "Sabev spa",
                "email": "s.sabev36@gmail.com",
                "fatturato": "€100.000,00",
                "piva": "IV438827761",
                "citta": "Reggio",
                "ordini":[
                    {"key":"33"},
                    {"key":"34"},
                    {"key":"35"}
                
                ]
                
            },
            
            
            ]
    
            var oModel = new JSONModel(dati);
            this.getView().setModel(oModel, "listaClienti");
            }

         
        }
      );
    }
  );
  