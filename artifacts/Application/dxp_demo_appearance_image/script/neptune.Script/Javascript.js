const icons = {
    LEGAL: "sap-icon://fas/section",
    PRIVACY: "sap-icon://fas/user-lock",
    SECURITY: "sap-icon://nep/security",
    ACCESSIBILITY: "sap-icon://accessibility",
    COOKIES: "sap-icon://fas/cookie-bite",
};

sap.ui.getCore().attachInit(function (data) {
    Icon.setSrc(icons[data?.icon] || "sap-icon://nep/neptune-connect");
});

neptune.Shell.attachBeforeDisplay(data => {
    Icon.setSrc(icons[data?.icon] || "sap-icon://nep/neptune-connect");
});

itemSegmentedButtonNew.addCustomData(new sap.ui.core.CustomData({
    key: "segmented",
    value: "new",
    writeToDom: true,
}));
itemSegmentedButtonCopy.addCustomData(new sap.ui.core.CustomData({
    key: "segmented",
    value: "copy",
    writeToDom: true,
}));
itemSegmentedButtonEdit.addCustomData(new sap.ui.core.CustomData({
    key: "segmented",
    value: "edit",
    writeToDom: true,
}));

