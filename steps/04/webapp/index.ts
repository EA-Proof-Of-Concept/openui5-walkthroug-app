import XMLView from 'sap/ui/core/mvc/XMLView';

XMLView.create( {
    viewName: 'openui5.walkthrough.ts.views.App'
} ).then( ( view: XMLView ): void => {
    view.placeAt( 'content' );
} );
