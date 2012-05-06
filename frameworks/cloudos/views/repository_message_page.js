COS.repositoryMessagePage = SC.Page.design ({
	
	interfaceView: SC.View.design({
	  layout: { top: 0, right: 0, bottom: 0, left: 0 },
	  childViews: ['titleView', 'descriptionView', 'keyTextArea'],
		
		render: function(context){
			context.push([	
				'<div class="line message_line absolute">','</div>',	
				'<div class="forms key_form absolute">','</div>',	
			].join(''))		
		},
		
		titleView: SC.LabelView.design({
			classNames: ['message_title'],
		  layout: { top: 10, right: 0, left: 0, height: 30 },
		  value: 'Deploy Key:'
		}),
		
		descriptionView: SC.LabelView.design({
			classNames: ['message_description'],
		  layout: { top: 50, right: 40, left: 40, height: 50 },
		  value: 'Generate your deploy keys when your applications repository is private.'
		}),
		
		keyTextArea: SC.TextFieldView.design({
			classNames: ['text_field_signin', 'top_index', 'radius_six'],
		  layout: { top: 105, left: 15, right: 15, height: 80 },
		  hint: 'ssh-rsa...',
		  isPassword: NO,
		  isTextArea: YES
		})
	  
	}),
		
})