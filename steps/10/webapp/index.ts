import ComponentContainer, { $ComponentContainerSettings } from "sap/ui/core/ComponentContainer";

const settings: $ComponentContainerSettings = {
    id: "container",
    name: "openui5.walkthrough.ts",
    settings: {
        id: "walkthrough"
    },
    autoPrefixId: true,
    async: true
};

const component: ComponentContainer = new ComponentContainer( settings );
component.placeAt( "content" );
