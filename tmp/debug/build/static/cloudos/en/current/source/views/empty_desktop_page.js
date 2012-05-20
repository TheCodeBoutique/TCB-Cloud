COS.emptyDesktopPage = SC.Page.design ({
	
	interfaceView: SC.View.design({
	  layout: { top: 0, right: 0, bottom: 0, left: 0 },	
	  childViews: ['message'],
	
		message: SC.View.design({
		  layout: { bottom: 0, centerX: 0, height: 150, width: 500},
		  
			render: function(context){
				context.push([
					'<div class="main_deploy_text text_style absolute">',"No Deployed Applications",'</div>',
					'<div class="description_deploy_text text_style absolute">',"Deploy your application by clicking on the upper right button.",'</div>',	
				].join(''))		
			},
		  
		}),

	}),
		
	
}); if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('cloudos');