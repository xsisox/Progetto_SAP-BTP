sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("project6.project6.controller.View1", {
            onInit: function () {


            },

            filtraTutto: function (oEvt) {
                var sQuery = oEvt.getParameter("query"),
                    aFilter = [new Filter("id", FilterOperator.Contains, sQuery),
                    new Filter("nome", FilterOperator.Contains, sQuery),
                    new Filter("tel", FilterOperator.Contains, sQuery),
                    new Filter("ragiones", FilterOperator.Contains, sQuery),
                    new Filter("email", FilterOperator.Contains, sQuery),
                    new Filter("citta", FilterOperator.Contains, sQuery),
                    new Filter("fatturato", FilterOperator.Contains, sQuery),
                    new Filter("piva", FilterOperator.Contains, sQuery),
                    ],
                    oTable = this.byId("table"),
                    oBinding = oTable.getBinding("rows"),
                    oFilter = null;
                if (sQuery.length != 0) {
                    oFilter = new Filter({
                        filters: aFilter,
                        and: false
                    });
                }
                oBinding.filter(oFilter);
            },

            onPress: function (oEvent) {
                var oSource = oEvent.getSource(),
                    oContext = oSource.getBindingContext("listaClienti");
                var indice = oContext.getProperty("indice");
                // yes = oContext.getPath(),
                // cliente = oContext.getProperty("nome");
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                oRouter.navTo("SecondRoute", {
                    objectId: indice,
                });


            },




           

        });
    });

     /* onPress: function (oEvent) {
                 var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                 oRouter.navTo("SecondRoute").attachPatternMatched(this._onObjectMatched, this);
                 //this._showObject(oEvent.getSource());
                // this.getView().getModel("listaClienti").getProperty("id", oEvent.getSource().getBindingContext());
 
             }, 
             */

            /* 
            _onObjectMatched: function (oEvent) {
                this.getView().bindElement({
                    path: "/listaClienti" + oEvent.getParameter("listaClienti").invoicePath,
                    model: "id"
                });
            }
            
            
            
            onPress : function (oEvent) {
                // The source is the list item that got pressed
                this._showObject(oEvent.getSource());
            },
            
            _showObject : function (oItem) {
                this.getRouter().navTo("object", {
                    objectId: oItem.getBindingContext().getPath().substring("/listaClienti".length)
                });
            },


           handleDetailsPress : function(oEvent) {
                MessageToast.show("Details for product with id " + this.getView().getModel().getProperty("ProductId", oEvent.getSource().getBindingContext()));
            }

            */







            /* 
 
             //barra di ricerca 
             handleSearch: function (oEvent) {
                 var filters = [];
                 var query = oEvent.getParameter("query");
                 if (query && query.length > 0) {
                     filters.push(new Filter({
                         path: 'listaClienti>/',
                         operator: FilterOperator.Contains,
                         value1: query,
                     }));
                 }
 
                 //bind filter with list
                 var getList=this.getView().byId("table");
                 var bindingItems=getList.getBinding("rows");
                 bindingItems.filter(filters);
 
 
             
             }
             
                 onSearch : function (oEvent) {
                     if (oEvent.getParameters().refreshButtonPressed) {
                         // Search field's 'refresh' button has been pressed.
                         // This is visible if you select any main list item.
                         // In this case no new search is triggered, we only
                         // refresh the list binding.
                         this.onRefresh();
                     } else {
                         var aTableSearchState = [];
                         var sQuery = oEvent.getParameter("query");
         
                         if (sQuery && sQuery.length > 0) {
                             aTableSearchState = [new Filter("{path:'listaClienti>/'}", FilterOperator.Contains, sQuery)];
                         }
                         this._applySearch(aTableSearchState);
                     }
         
                 }, 
     
                 _filter : function() {
                     var oFilter = null;
         
                     if (this._oGlobalFilter && this._oPriceFilter) {
                         oFilter = new sap.ui.model.Filter([this._oGlobalFilter, this._oPriceFilter], true);
                     } else if (this._oGlobalFilter) {
                         oFilter = this._oGlobalFilter;
                     } else if (this._oPriceFilter) {
                         oFilter = this._oPriceFilter;
                     }
         
                     this.byId("table").getBinding("rows").filter(oFilter, "Application");
     
                 },
                 filterGlobally : function(oEvent) {
                     var sQuery = oEvent.getParameter("query");
                     this._oGlobalFilter = null;
                 
     
     
     
                 },
     
                 */