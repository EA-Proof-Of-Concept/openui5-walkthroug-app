import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import View from "sap/ui/core/mvc/View";
import JSONModel from "sap/ui/model/json/JSONModel";

export default class App extends Controller {

    public onInit(): void {
        const view = <View>this.getView();
        view.setModel( new JSONModel( {
            persona: {
                nombre: "Eric"
            }
        } ) );
    }

    public onSayHello(): void {
        MessageToast.show( "¡Hola soy OpenUI5!" );
    }
}