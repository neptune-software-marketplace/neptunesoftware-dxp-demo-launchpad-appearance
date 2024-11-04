const context = oEvent.oSource.getBindingContext();
const data = context.getObject();

modelPageDetail.setData(data);

apiNHLRosterTeamSeason({
    team: data.teamAbbrev.default,
    season: `20242025`
}).success((obj) => {
    modelTabForwards.setData(obj.forwards);
    modelTabDefensemen.setData(obj.defensemen);
    modelTabGoalies.setData(obj.goalies);
    // const roster = [...obj.forwards, ...obj.defensemen, ...obj.goalies];
    // modelTabRoster.setData(roster);

    // TabRoster.getBinding("items").sort(
    //     new sap.ui.model.Sorter("positionCode", false,

    //         //group function
    //         function(context) {

    //             var data = context.getModel().getObject(context.getPath());
    //             if (data.positionCode === "G") {
    //                 return {
    //                     key: "goalie",
    //                     text: "GOALIES"
    //                 };
    //             }
    //             if (data.positionCode === "D") {
    //                 return {
    //                     key: "defensemen",
    //                     text: "DEFENSEMEN"
    //                 };
    //             }
    //             return {
    //                 key: "forwards",
    //                 text: "FORWARDS"
    //             };
    //         },

    //         // sorter function
    //         function(value1, value2) {

    //             var convertedValue1 = value1; // myConvertToNumberFn(value1);
    //             var convertedValue2 = value2; // myConvertToNumberFn(value2);

    //             if (convertedValue1 < convertedValue2) return -1;
    //             if (convertedValue1 === convertedValue2) return 0;
    //             if (convertedValue1 > convertedValue2) return 1;
    //         }
    //     )
    // );
});

iconTabBarDetail.setVisible();

if (ResponsiveSplitter.hasStyleClass("sapUiRSVisiblePaginator")) {
    ResponsiveSplitter._activatePage(1);
}
