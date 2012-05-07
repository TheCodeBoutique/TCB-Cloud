// ==========================================================================
// Project:   Nextgen - mainPage
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Nextgen */

// This page describes the main user interface for your application.  
Nextgen.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
		classNames: ['base_color'],
    childViews: ['textureView'],
    
    textureView: SC.View.design({
			classNames: ['texture no_opacity'],
      layout: { top: 0, right: 0, bottom: 0, left: 0 },
			childViews: ['shadowDOM'],
			
			shadowDOM: SC.ContainerView.design({
	      layout: { top: 0, right: 0, bottom: 0, left: 0 },
	      nowShowingBinding: 'Nextgen.viewsController.nowShowing'
	    }),

    }),

  })

});

	
