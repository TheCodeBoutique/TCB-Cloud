COS.repositoryURLPage = SC.Page.design ({
	
	interfaceView: SC.View.design ({
		classNames: ['overlay_pane'],
		layout: { top: 0, bottom: 0, left: 0, right: 0 },
		childViews: ['menuBase'],

		menuBase: SC.View.design({
			layerId:['DeployMessageMenuBase'],
		  layout: { centerX: 0, centerY: 0, height: 248, width: 448 },
		  classNames: ['blue_gradient_fliped', 'radius_six', 'no_opacity', 'menu_shadow'],
			childViews: ['titleView', 'descriptionView', 'contentView', 'cancelButton', 'nextButton'],

			render: function(context){
				context.push([	
					'<div class="line message_line absolute">','</div>',	
				].join(''))		
			},

			titleView: SC.LabelView.design({
				classNames: ['message_title'],
			  layout: { top: 10, right: 0, left: 0, height: 30 },
			   valueBinding: 'Nextgen.deployMessageViewController.deployTitle'
			}),

			descriptionView: SC.LabelView.design({
				classNames: ['message_description'],
			  layout: { top: 50, right: 20, left: 20, height: 50 },
			  valueBinding: 'Nextgen.deployMessageViewController.descriptionContent',
			}),

			contentView: SC.ContainerView.design({
			  layout: { top: 100, right: 10, left: 10, height: 96 },
			  nowShowingBinding: 'Nextgen.deployMessageViewController.contentView'
			}),

			cancelButton: SC.ButtonView.design({
				classNames: 'cancel_button'.w(),
			  layout: { bottom: 10, left: 100, height: 25, width: 100 },
			  titleBinding: 'Nextgen.deployMessageViewController.previousButtonState',
			  action: 'previousState',
			  target: 'Nextgen.statechart'
			}),

			nextButton: SC.ButtonView.design({
				classNames: 'submit_button'.w(),
			  layout: { bottom: 10, right: 100, height: 25, width: 100 },
			  titleBinding: 'Nextgen.deployMessageViewController.buttonState',
			  action: 'nextState',
			  target: 'Nextgen.statechart'
			}),
			
		})
		
	}),
		
});

; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('cloudos');