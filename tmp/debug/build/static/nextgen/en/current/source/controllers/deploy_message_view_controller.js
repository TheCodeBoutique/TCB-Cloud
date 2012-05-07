// ==========================================================================
// Project:   Nextgen.deployMessageViewController
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Nextgen */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Nextgen.deployMessageViewController = SC.ObjectController.create(
/** @scope Nextgen.deployMessageViewController.prototype */ {
	
	deployTitle: '',
	descriptionContent: '',
	previousButtonState: '',
	buttonState: '',

	contentView: '',
	navigationView: ''
	

}) ;
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('nextgen');