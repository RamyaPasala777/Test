sap.ui.define([
  "./BaseController"
],
  function (Controller) {
    "use strict";

    return Controller.extend("com.app.project1.controller.View1", {
      onInit() {

      },
      //  login button event: Navigating to next page

      onPress: function () {
        this.getOwnerComponent().getRouter().navTo("RouteView2")
      },

      // signup button event: for opening the signup dialog box by using basecontroller
 
      onSignupBtnPress: async function () {
        if (!this.ologin) {
          this.ologin = await this.loadFragment("simpleForm")
        }
        this.ologin.open()
      },

      // for closing the dialog box
      
      onCloseBtnPress: function () {
        if (this.ologin.isOpen()) {
          this.ologin.close()
        }
      },

      
    });
  });