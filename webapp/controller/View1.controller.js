sap.ui.define([
  "./BaseController"
],
  function (Controller) {
    "use strict";

    return Controller.extend("com.app.project1.controller.View1", {
      onInit() {

      },
      onPress: function () {
        this.getOwnerComponent().getRouter().navTo("RouteView2")
      },
      onSignupBtnPress: async function () {
        if (!this.ologin) {
          this.ologin = await this.loadFragment("simpleForm")
        }
        this.ologin.open()
      },
      onCloseBtnPress: function () {
        if (this.ologin.isOpen()) {
          this.ologin.close()
        }
      },
      
    });
  });