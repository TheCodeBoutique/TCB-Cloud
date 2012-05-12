COS.sshKeyPage = SC.Page.design ({
	
	menuBase: SC.View.design({
		layerId:['DeployMessageMenuBase'],
	  layout: { centerX: 0, centerY: 0, height: 248, width: 448 },
	  classNames: ['blue_gradient_fliped', 'radius_six', 'menu_shadow'],
		
		render: function(context){
			context.push([		
				'<div class="forms key_form absolute">','</div>',	
			].join(''))		
		},

		keyTextArea: SC.TextFieldView.design({
			classNames: ['text_field_signin', 'top_index', 'radius_six'],
		  layout: { top: 2, left: 15, right: 15, height: 92 },
		  hint: 'ssh-rsa...',
		  isPassword: NO,
		  isTextArea: YES
		})
	  
	}),
		
}); if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('cloudos');