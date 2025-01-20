sap.ui.define([
  "sap/ui/core/mvc/Controller",

],
  function (Controller) {
    "use strict";

    return Controller.extend("com.app.project1.controller.View2", {
      onInit() {

      },

      // press event for back button to navigate the first page

      onPressSignUpIn_View2: function () {
        this.getOwnerComponent().getRouter().navTo("RouteView1")
      },

      // loading the dialog box without using basecontroller

      onClickBtnPress: async function () {
        this.sampleDialog ??= await this.loadFragment({
          name: "com.app.project1.fragments.sample"
        });
        this.sampleDialog.open();
      },

      // onCloseClickBtnPress: function () {
      //   this.byId("idDialog1").close()
      // },

      onCloseClickBtnPress: function () {
        if (this.sampleDialog.isOpen()) {
          this.sampleDialog.close()
        }
      }

    });
  });