Nextgen.statechart = SC.Statechart.create({

  initialState: 'readyState',
  
  readyState: SC.State.plugin('Nextgen.ReadyState'),
  // someOtherState: SC.State.plugin('Nextgen.SomeOtherState')

});; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('nextgen');