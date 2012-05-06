Nextgen.statechart = SC.Statechart.create({

  initialState: 'readyState',
  
  readyState: SC.State.plugin('Nextgen.ReadyState'),
  desktopState: SC.State.plugin('Nextgen.DesktopState'),
	startDeployState: SC.State.plugin('Nextgen.StartDeployState'),
	deployKeyState: SC.State.plugin('Nextgen.DeployKeyState'),
	deployBranchState: SC.State.plugin('Nextgen.DeployBranchState'),
	deployIndexState: SC.State.plugin('Nextgen.DeployIndexState')

});