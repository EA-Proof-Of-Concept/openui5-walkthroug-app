import ResourceBundle from "sap/base/i18n/ResourceBundle";
import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import View from "sap/ui/core/mvc/View";
import JSONModel from "sap/ui/model/json/JSONModel";
import Model from "sap/ui/model/Model";
import ResourceModel from "sap/ui/model/resource/ResourceModel";

export default class App extends Controller {

    private model: JSONModel;
    private resource: ResourceModel;

    constructor() {
        super( "openui5.walkthrough.ts.controller.App" );
        this.model = new JSONModel( {
            person: {
                name: "Eric"
            }
        } );
        this.resource = new ResourceModel( {
            bundleName: "openui5.walkthrough.ts.i18n.lang"
        } );
    }

    public onInit(): void {
        const view = this.getView() as View;
        view.setModel( this.model );
        view.setModel( this.resource, "i18n" );
    }

    public async onSayHello(): Promise<void> {
        
        const view: View = this.getView() as View;
        const name: string = ( view.getModel() as Model )
            .getProperty( "/person/name" );
        
        const resource: ResourceBundle = await (
            view.getModel( "i18n" ) as ResourceModel ).getResourceBundle();
        
        const message: string = resource.getText( "control.messageToast.text",
            [name] ) || 'Propiedad no establecida.';
        
        MessageToast.show( `OpenUI5 dice: ${message}` );
    }
}
