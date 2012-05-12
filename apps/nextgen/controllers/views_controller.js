// ==========================================================================
// Project:   Nextgen.viewsController
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Nextgen */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Nextgen.viewsController = SC.ArrayController.create(
/** @scope Nextgen.viewsController.prototype */ {

  currentView: '',
	tmp: '',
	foo: '',
	ey: '',
	
	// below are being tested for window truth... see main.js
	
	animateSize: '',
	passTheValue: '',
	
	// below are being tested for message animations... see StartDeployState
	
	isActive: NO,
	
	
	// isEnabled for the deploy button... set it to no after initial click to deploy.  
	
	isEnabled: YES

}) ;
