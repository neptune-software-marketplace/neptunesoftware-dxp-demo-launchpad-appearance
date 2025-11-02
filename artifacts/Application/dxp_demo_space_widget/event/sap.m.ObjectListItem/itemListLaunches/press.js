const context = oEvent.getSource().getBindingContext("SpaceX");
const path = context.getPath()
const data = context.getObject(path);
modelFormLaunch.setData(data);
modelListCrew.setData(data.crewMembers);