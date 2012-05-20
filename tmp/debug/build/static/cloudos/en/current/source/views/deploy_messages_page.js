COS.deployMessagePage = SC.Page.design ({
	
	interfaceView: SC.View.design ({
		classNames: ['overlay_pane'],
		layout: { top: 0, bottom: 0, left: 0, right: 0 },
		childViews: ['menuBaseOne', 'menuBaseTwo', 'menuBaseThree', 'menuBaseFour'],

		menuBaseOne: SC.View.design({
			layerId:['MenuBaseOne'],
		  layout: COS.PANE_LAYOUT.DEPLOY_MENU_LAYOUT,
		  classNames: ['blue_gradient_fliped', 'radius_six', 'menu_shadow'],
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
			  action: 'scaleDown',
			  target: 'Nextgen.statechart'
			}),

			nextButton: SC.ButtonView.design({
				classNames: 'submit_button'.w(),
			  layout: { bottom: 10, right: 100, height: 25, width: 100 },
			  title: 'Next',
			  action: 'slideInDeployKeyMenu',
			  target: 'Nextgen.statechart'
			}),
			
		}),
		
		menuBaseTwo: SC.View.design({
			layerId:['MenuBaseTwo'],
			isActive: 'Nextgen.viewsController.isActive',
		  layout: { left: 2000, centerY: 0, height: 248, width: 448 },
		  classNames: ['blue_gradient_fliped', 'radius_six', 'menu_shadow'],
			childViews: ['titleView', 'descriptionView', 'keyTextArea', 'cancelButton', 'nextButton'],

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
			  value: 'Generate your deploy keys when your applications repository is private.',
			}),

			keyTextArea: SC.TextFieldView.design({
				classNames: ['text_field_signin', 'top_index', 'radius_six'],
			  layout: { bottom: 50, left: 25, right: 25, height: 90 },
			  hint: 'ssh-rsa...',
			  isPassword: NO,
			  isTextArea: YES
			}),
			
			cancelButton: SC.ButtonView.design({
				classNames: 'cancel_button'.w(),
			  layout: { bottom: 10, left: 100, height: 25, width: 100 },
			  title: 'Cancel',
			  action: 'slideInDeployKeyMenuReverse',
			  target: 'Nextgen.statechart'
			}),

			nextButton: SC.ButtonView.design({
				classNames: 'submit_button'.w(),
			  layout: { bottom: 10, right: 100, height: 25, width: 100 },
			  title: 'Generate',
			  action: 'slideInRepositoryBranchMenu',
			  target: 'Nextgen.statechart'
			}),

		}),
		
		menuBaseThree: SC.View.design({
			layerId:['MenuBaseThree'],
			isActive: 'Nextgen.viewsController.isActive',
		  layout: { left: 2000, centerY: 0, height: 248, width: 448 },
		  classNames: ['blue_gradient_fliped', 'radius_six', 'menu_shadow'],
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
			  value: 'Repository Branch:'
			}),

			descriptionView: SC.LabelView.design({
				classNames: ['message_description'],
			  layout: { top: 50, right: 40, left: 40, height: 50 },
			  value: 'Enter the branch name that you would like your application to deploy from.',
			}),

			textField: SC.TextFieldView.design({
				classNames: ['text_field_signin', 'top_index'],
			  layout: { top: 130, left: 54, height: 36, width: 325 },
			  hint: 'master',
			  isPassword: NO,
			  isTextArea: NO
			}),

			cancelButton: SC.ButtonView.design({
				classNames: 'cancel_button'.w(),
			  layout: { bottom: 10, left: 100, height: 25, width: 100 },
			  title: 'Cancel',
			  action: 'slideInRepositoryBranchMenuReverse',
			  target: 'Nextgen.statechart'
			}),

			nextButton: SC.ButtonView.design({
				classNames: 'submit_button'.w(),
			  layout: { bottom: 10, right: 100, height: 25, width: 100 },
			  title: 'Next',
			  action: 'slideInIndexMenu',
			  target: 'Nextgen.statechart'
			}),

		}),
		
		menuBaseFour: SC.View.design({
			layerId:['MenuBaseFour'],
			isActive: 'Nextgen.viewsController.isActive',
		  layout: { left: 2000, centerY: 0, height: 248, width: 448 },
		  classNames: ['blue_gradient_fliped', 'radius_six', 'menu_shadow'],
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
			  value: 'Index Path:'
			}),

			descriptionView: SC.LabelView.design({
				classNames: ['message_description'],
			  layout: { top: 50, right: 40, left: 40, height: 50 },
			  value: 'Enter the path to your application index file.',
			}),

			textField: SC.TextFieldView.design({
				classNames: ['text_field_signin', 'top_index'],
			  layout: { top: 130, left: 54, height: 36, width: 325 },
			  hint: 'appName/index',
			  isPassword: NO,
			  isTextArea: NO
			}),

			cancelButton: SC.ButtonView.design({
				classNames: 'cancel_button'.w(),
			  layout: { bottom: 10, left: 100, height: 25, width: 100 },
			  title: 'Cancel',
			  action: 'slideInIndexMenuReverse',
			  target: 'Nextgen.statechart'
			}),

			nextButton: SC.ButtonView.design({
				classNames: 'submit_button'.w(),
			  layout: { bottom: 10, right: 100, height: 25, width: 100 },
			  title: 'Deploy',
			  action: 'deployApplication',
			  target: 'Nextgen.statechart',
				isEnabledBinding: 'Nextgen.viewsController.isEnabled'
			}),

		}),
		
	}),
		
});

; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('cloudos');