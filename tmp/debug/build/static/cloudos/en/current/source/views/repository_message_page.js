COS.repositoryMessagePage = SC.Page.design ({
	
	interfaceView: SC.View.design({
	  layout: { top: 0, right: 0, bottom: 0, left: 0 },
	  childViews: ['keyTextArea'],
		
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