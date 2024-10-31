sap.ui.getCore().attachInit(function(startParams) {
    neptune.Module.Load.IconExplorer().then(IconExplorer => {
        IconExplorer.open({
            hideHeader: true,
            parentObject: iconContainer,
            callback: (iconUri)=>{
                console.log(`${localAppID} - ${iconUri}`);
            }
        });
    }).catch((err) => {
        console.error(err);
    });
});
