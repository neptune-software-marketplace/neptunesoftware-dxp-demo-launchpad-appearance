// Custom Init - Happens only once when mounting the component
sap.ui.getCore().attachInit(function (startParams) {
    console.log(`dxp_demo_nhl_player init`);
});

if (sap.n) {
    sap.n.Shell.attachBeforeDisplay(function (startParams) {
        console.log(`dxp_demo_nhl_player beforeDisplay`);
        modelPagePlayer.setData(startParams);
    });
}
