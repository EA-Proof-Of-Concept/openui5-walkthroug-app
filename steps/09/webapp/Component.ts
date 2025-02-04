import Control from "sap/ui/core/Control";
import UIComponent from "sap/ui/core/UIComponent";
import XMLView from "sap/ui/core/mvc/XMLView";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";

/**
 * @name openui5.walkthrough.ts.Component
 */
export default class Component extends UIComponent {

    public static metadata = {
        "interfaces": [ "sap.ui.core.IAsyncContentCreation" ]
    };

    /**
     * @method init
     */
    public init(): void {
        // call the init function of the parent
        super.init();

        // set data model
        this.setModel( new JSONModel( {
            person: {
                name: "John Doe"
            }
        } ) );

        // set i18n model
        this.setModel( new ResourceModel( {
            bundleName: "openui5.walkthrough.ts.i18n.i18n"
        } ), "i18n" );
    };

    /**
     * 
     * @method createContent
     */
    public createContent(): Control | Promise<Control | null> | null {
        return XMLView.create( {
            "viewName": "openui5.walkthrough.ts.view.App",
            "id": "app"
        } );
    };
}
