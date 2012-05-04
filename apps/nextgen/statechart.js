Nextgen.statechart = SC.Statechart.create({

  initialState: 'readyState',
  
  readyState: SC.State.plugin('Nextgen.ReadyState'),
  desktopState: SC.State.plugin('Nextgen.DesktopState')

});