//@ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller", 
    "sap/m/MessageToast"    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast 
     */
    function (Controller, MessageToast) {
        "use strict";
        
        return Controller.extend("gerydtp.SAPUI5.controller.HelloPanel", {
            onInit: function () {

            },

            onShowHello : function () { 
                // read text rom i18n
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                // read property from data model
                var sMsg = oBundle.getText("helloMsg", [sRecipient, "to see you"])
                MessageToast.show(sMsg);
            },
            
            onOpenDialog : function () {

                this.getOwnerComponent().openHelloDialog();            

            }

            

        });

    });