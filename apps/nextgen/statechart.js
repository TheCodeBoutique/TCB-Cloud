Nextgen.statechart = SC.Statechart.create({

  initialState: 'readyState',
  
  readyState: SC.State.plugin('Nextgen.ReadyState'),
  loggedOutState: SC.State.plugin('Nextgen.LoggedOutState'),
	desktopState: SC.State.plugin('Nextgen.DesktopState'),
	desktopWithDataState: SC.State.plugin('Nextgen.DesktopWithDataState'),
	startDeployState: SC.State.plugin('Nextgen.StartDeployState'),
	sshDeployState: SC.State.plugin('Nextgen.SSHDeployState'),
});