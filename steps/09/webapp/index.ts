import ComponentContainer from "sap/ui/core/ComponentContainer";

new ComponentContainer({
    id: "container",
    name: "openui5.walkthrough.ts",
    settings: {
        id: "walkthrough"
    },
    autoPrefixId: true,
    async: true
}).placeAt("content");