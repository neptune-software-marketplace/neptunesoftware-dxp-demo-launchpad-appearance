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
});


apiNHLScheduleTeamSeason({
    team: data.teamAbbrev.default,
    season: `20242025`
}).success((obj) => {
    // console.table(obj.games);
    modelListSchedule.setData(obj.games);
});

iconTabBarDetail.setVisible();

if (ResponsiveSplitter.hasStyleClass("sapUiRSVisiblePaginator")) {
    ResponsiveSplitter._activatePage(1);
}
