/*$.ajax({
    type: "GET",
    url: "/proxy/https%3A%2F%2Fapi-web.nhle.com%2Fv1%2Fstandings%2F2024-11-03/61f8d9eb-8b45-4650-90dc-8a5fa8cf1908",
    headers: {},
    statusCode: {},
    timeout: 0,
    custObj: {},
    success: function (data, status, xhr) { },
    error: function (xhr, status, error) { },
    complete: function (xhr, status) {
        if (xhr.status >= 200 && xhr.status < 300) {
            modelTabStandings.setData(xhr.responseJSON.standings);
        }
    },
});
*/
modelPageDetail.setData({
    teamLogo: "https://assets.nhle.com/logos/nhl/svg/NHL_light.svg",
    teamName: {
        default: "NHL"
    }
});

jQuery.sap.require("sap.ui.core.format.DateFormat");
const date = new Date();
const format = sap.ui.core.format.DateFormat.getDateTimeInstance({
    pattern: "yyyy-MM-dd",
});
const now = format.format(date);

apiNHLStandingsDate({
    date: now
}).success((obj) => {
    modelTabStandings.setData(obj.standings);
});