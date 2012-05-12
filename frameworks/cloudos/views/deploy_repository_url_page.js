COS.repositoryURLPage = SC.Page.design ({
	
	interfaceView: SC.View.design ({
		classNames: ['overlay_pane'],
		layout: { top: 0, bottom: 0, left: 0, right: 0 },
		childViews: ['menuBaseOne', 'menuBaseTwo', 'menuBaseThree', 'menuBaseFour'],

		menuBaseOne: SC.View.design({
			layerId:['RepositoryMessageMenuBase'],
		  layout: { centerX: 0, centerY: 0, height: 248, width: 448 },
		  classNames: ['blue_gradient_fliped', 'radius_six', 'no_opacity', 'menu_shadow'],
			childViews: ['titleView', 'descriptionView', 'textField', 'cancelButton', 'nextButton'],

			render: function(context){
				context.push([	
					'<div class="line message_line absolute">','</div>',
					'<div class="forms repository_url_form absolute">','</div>',	
				].join(''))		
			},

			titleView: SC.LabelView.design({
				classNames: ['message_title'],
			  layout: { top: 10, right: 0, left: 0, height: 30 },
			  value: 'Repository URL:'
			}),

			descriptionView: SC.LabelView.design({
				classNames: ['message_description'],
			  layout: { top: 50, right: 20, left: 20, height: 50 },
			  value: 'To deploy your application.  Enter your git or SVN URL associated to your application.',
			}),

			textField: SC.TextFieldView.design({
				classNames: ['text_field_signin', 'top_index'],
			  layout: { top: 130, left: 54, height: 36, width: 325 },
			  hint: 'git@github.com:accountName/applicationName.git',
			  isPassword: NO,
			  isTextArea: NO
			}),

			cancelButton: SC.ButtonView.design({
				classNames: 'cancel_button'.w(),
			  layout: { bottom: 10, left: 100, height: 25, width: 100 },
			  title: 'Cancel',
			  action: 'previousState',
			  target: 'Nextgen.statechart'
			}),

			nextButton: SC.ButtonView.design({
				classNames: 'submit_button'.w(),
			  layout: { bottom: 10, right: 100, height: 25, width: 100 },
			  title: 'Next',
			  action: 'removeRepositoryURLMessage',
			  target: 'Nextgen.statechart'
			}),
			
		}),
		
		menuBaseTwo: SC.View.design({
			layerId:['MenuBaseTwo'],
		  layout: { left: 2000, centerY: 0, height: 248, width: 448 },
		  classNames: ['blue_gradient_fliped', 'radius_six', 'menu_shadow'],
			childViews: ['cancelButton', 'nextButton'],

			render: function(context){
				context.push([		
					'<div class="forms key_form absolute">','</div>',	
				].join(''))		
			},

			keyTextArea: SC.TextFieldView.design({
				classNames: ['text_field_signin', 'top_index', 'radius_six'],
			  layout: { centerY: 0, left: 15, right: 15, height: 120 },
			  hint: 'ssh-rsa...',
			  isPassword: NO,
			  isTextArea: YES
			}),
			
			cancelButton: SC.ButtonView.design({
				classNames: 'cancel_button'.w(),
			  layout: { bottom: 10, left: 100, height: 25, width: 100 },
			  title: 'Cancel',
			  action: 'previousState',
			  target: 'Nextgen.statechart'
			}),

			nextButton: SC.ButtonView.design({
				classNames: 'submit_button'.w(),
			  layout: { bottom: 10, right: 100, height: 25, width: 100 },
			  title: 'Generate',
			  action: 'animateMenuBaseThree',
			  target: 'Nextgen.statechart'
			}),

		}),
		
		menuBaseThree: SC.View.design({
			layerId:['MenuBaseThree'],
		  layout: { left: 2000, centerY: 0, height: 248, width: 448 },
		  classNames: ['blue_gradient_fliped', 'radius_six', 'menu_shadow'],
			childViews: ['cancelButton', 'nextButton'],

			cancelButton: SC.ButtonView.design({
				classNames: 'cancel_button'.w(),
			  layout: { bottom: 10, left: 100, height: 25, width: 100 },
			  title: 'Cancel',
			  action: 'previousState',
			  target: 'Nextgen.statechart'
			}),

			nextButton: SC.ButtonView.design({
				classNames: 'submit_button'.w(),
			  layout: { bottom: 10, right: 100, height: 25, width: 100 },
			  title: 'Next',
			  action: 'animateMenuBaseFour',
			  target: 'Nextgen.statechart'
			}),

		}),
		
		menuBaseFour: SC.View.design({
			layerId:['MenuBaseFour'],
		  layout: { left: 2000, centerY: 0, height: 248, width: 448 },
		  classNames: ['blue_gradient_fliped', 'radius_six', 'menu_shadow'],
			childViews: ['cancelButton', 'nextButton'],

			cancelButton: SC.ButtonView.design({
				classNames: 'cancel_button'.w(),
			  layout: { bottom: 10, left: 100, height: 25, width: 100 },
			  title: 'Cancel',
			  action: 'previousState',
			  target: 'Nextgen.statechart'
			}),

			nextButton: SC.ButtonView.design({
				classNames: 'submit_button'.w(),
			  layout: { bottom: 10, right: 100, height: 25, width: 100 },
			  title: 'Deploy',
			  action: 'deployApplication',
			  target: 'Nextgen.statechart'
			}),

		}),
		
	}),
		
});

