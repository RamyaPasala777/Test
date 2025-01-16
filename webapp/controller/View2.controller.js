sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], 
  function(Controller)  {
    "use strict";
  
    return Controller.extend("com.app.project1.controller.View2", {
        onInit() {
           
        },
        // press event for signup
        onPressSignUpIn_View2:function(){
            this.getOwnerComponent().getRouter().navTo("RouteView1")
          },

    });
  });