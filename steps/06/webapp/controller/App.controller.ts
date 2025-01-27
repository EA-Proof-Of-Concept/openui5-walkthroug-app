import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";

export default class App extends Controller {
    
    public onSayHello(): void {
        MessageToast.show("¡Hola! ¡Soy OpenUI5!");
    }
}
