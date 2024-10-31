// modelGoalGrid.setData(getAPIData());

sap.ui.getCore().attachThemeChanged(function () {    
    setAPIData();
});

sap.ui.getCore().attachInit(function (startParams) {
    setAPIData();
});

// sap?.n?.Shell?.attachBeforeDisplay(function (startParams) {  
//     setAPIData();
// });
