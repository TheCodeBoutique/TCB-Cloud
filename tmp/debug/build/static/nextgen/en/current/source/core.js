// ==========================================================================
// Project:   Nextgen
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Nextgen */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
Nextgen = SC.Application.create(
  /** @scope Nextgen.prototype */ {

  NAMESPACE: 'Nextgen',
  VERSION: '0.1.0',

  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
//  store: SC.Store.create().from(SC.Record.fixtures),
    store: SC.Store.create().from('Nextgen.MainDataSource'),
  
  // TODO: Add global constants or singleton objects needed by your app here.
	ANIMATIONS: {
		DOC_WIDTH:$(document).width()
	}

}) ;
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('nextgen');