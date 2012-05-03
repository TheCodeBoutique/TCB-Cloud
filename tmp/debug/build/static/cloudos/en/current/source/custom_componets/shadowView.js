// ==========================================================================
// Project:   Cloud OS - Clientside Application Framework
// Copyright: ©2012 The Code Boutique.
// License:   Internal Purposes Only.  Not for public.
// Author: Chad Eubanks
// ==========================================================================


/**
  @class

  Displays a shadow which gives the effect of a embeded view. 

  @extends SC.View
  @since Cloud OS 1.0
  @author: Chad Eubanks. Kyle Carriedo
*/


COS.ShadowView = SC.View.extend(
/** @scope COS.ShadowView.prototype */ {
	
	render: function(context) {
		context.push('<div class="shadow_view"></div>')
	},
  
});; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('cloudos');