sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "sap/m/Button",
    "sap/m/Dialog",
    "sap/m/Link",
    "sap/m/ButtonType"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Fragment, Button, Dialog, Link, ButtonType) {
        "use strict";

        return Controller.extend("project6.project6.controller.View2", {
            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("SecondRoute").attachPatternMatched(this._onObjectMatched, this);

                var datio = [{
                    "nordine": "#123456788",
                    "quantità": "1",
                    "importo": "244,90 €",
                    "dataOrdine": "29/11/2022",
                    "stato": "in elaborazione",
                    "state": "Warning",
                },

                {
                    "nordine": "#123456789",
                    "quantità": "5",
                    "importo": "1.250 €",
                    "dataOrdine": "30/11/2022",
                    "stato": "in elaborazione",
                    "state": "Warning",
                },

                {
                    "nordine": "#123456780",
                    "quantità": "7",
                    "importo": "990,00 €",
                    "dataOrdine": "13/01/2022",
                    "stato": "ricevuto",
                    "state": "Success"
                },

                {
                    "nordine": "#123456799",
                    "quantità": "3",
                    "importo": "750,00 €",
                    "dataOrdine": "08/11/2022",
                    "stato": "errore",
                    "state": "Error"
                }
                ]

                var oModel2 = new JSONModel(datio);
                this.getView().setModel(oModel2, "listaOrdini");


                var datid = [{
                    "descrizione": "Notebook",
                    "punitario" : "500,00 €",
                    "quantita1": "1",
                    "pxq": "500,00 €", 
                    "sconto": "5%",
                    "iva": "20%",
                    "totale": "475,00 €"
                },
                {
                    "descrizione": "Mouse",
                    "punitario" : "50,00 €",
                    "quantita1": "3",
                    "pxq": "150,00 €", 
                    "sconto": "15%",
                    "iva": "22%",
                    "totale": "127,50 €"
                },
                {
                    "descrizione": "",
                    "punitario" : "",
                    "quantita1": "",
                    "pxq": "", 
                    "sconto": "",
                    "iva": "",
                    "totale": "602,00 €"
                }
            ]
                var oModelD = new JSONModel(datid);
                this.getView().setModel(oModelD, "infoOrdine");
                
                //json model del dialog dati pagamento
                var datip = [
                    {
                        "paese": "Italia",
                        "tipocarta": "VISA",
                        "numerocarta": "3677899033",
                        "intestatario": "Mario Rossi",
                        "indirizzofatturazione": "via Roma 13",
                        "indirizzodestinatario": "via Roma 13"

                }
            ]
                var oModel3 = new JSONModel(datip);
                this.getView().setModel(oModel3, "pagamento");

            },

            

            _onObjectMatched: function (oEvent) {
                var sObjectId = oEvent.getParameter("arguments").objectId;
                //this.getView().bindElement({
                  //  path: "/" + sObjectId + "/ordini",
                  //  model: "listaClienti"
               // });
               var table= this.getView().byId("table");
               table.bindRows("listaClienti>/" + sObjectId + "/ordini");
            },

            //button traking
            onTracking: function (oEvent) {
              
                var dialog = new Dialog({
                    title: 'Sito di spedizione',
                    type: 'Message',
                    state: 'Information',

                    //crato 'new Link' dove prima c'era "new Text"
                    content: new Link({
                            text: "Tieni traccia dell'ordine",
                            link: 'https://services.brt.it/it/tracking',
                            href: 'https://services.brt.it/it/tracking',
                            target: '_blank'
                    }),
                    beginButton: new Button({
                        type: ButtonType.Emphasized,
                        text: 'Chiudi',
                        press: function () {
                            dialog.close();
                        }
                    }),
                    afterClose: function() {
                        dialog.destroy();
                    }
                });
    
                dialog.open();
        },

        //button dettagli apertura dialog

            onDettagli: function () {
                var oView = this.getView();

                // create dialog lazily
                if (!this.byId("DialogDettagli")) {
                    // load asynchronous XML fragment
                    Fragment.load({
                        id: oView.getId(),
                        name: "project6.project6.view.DialogDettagli",
                        controller: this
                    }).then(function (oDialog) {
                        // connect dialog to the root view of this component (models, lifecycle)
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                } else {
                    this.byId("DialogDettagli").open();
                }
            },

            //chiusura dialog
            onCloseDialog: function() {
                this.byId("dettagliOrdine").close();
            }
            

            
        

            
        });
        
    });


    