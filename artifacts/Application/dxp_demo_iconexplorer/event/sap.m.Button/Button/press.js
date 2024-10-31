neptune.Module.Load.IconExplorer().then(IconExplorer => {
    IconExplorer.open({
        callback: (iconUri)=>{
            console.log(`Dialog - ${localAppID} - ${iconUri}`);
        },
        onClose: ()=>{
            console.log("closed...");
        },
        onClear: ()=>{
            console.log("cleared...");
        }
    });
}).catch((err) => {
    console.error(err);
});