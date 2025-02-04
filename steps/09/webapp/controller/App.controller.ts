import ResourceBundle from "sap/base/i18n/ResourceBundle";
import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import View from "sap/ui/core/mvc/View";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";

/**
 * @name openui5.walkthrough.ts.controller.App
 */
export default class AppController extends Controller {
    
    public onSayHello(): void {

        const view: View = this.getView() as View;

        const name = ( view.getModel() as JSONModel )
            .getProperty( "/person/name" );
        const bundle = ( view.getModel( "i18n" ) as ResourceModel )
            .getResourceBundle() as ResourceBundle;
        
        const message: string = bundle.getText( "control.messageToast.text",
            [ name ] ) as string;
        // show message
        MessageToast.show( message );
    }
}
