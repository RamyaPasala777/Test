sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/Fragment"
    ],
    function(BaseController,Fragment){
        "use strict";

        return BaseController.extend("com.app.project1.controller.BaseController",{
            onInit:function(){

            },
            
            loadFragment: async function (sFragmentName) {
                const oFragment = await Fragment.load({
                    id: this.getView().getId(),
                    name: `com.app.project1.fragments.${sFragmentName}`,
                    controller: this
                });
                this.getView().addDependent(oFragment);
                return oFragment
            }
        })
    }
)