COS.singleFormView = SC.View.extend ({
	childViews: ['dynamicForm'],
	
	singleFormTitle: '',
	
	render: function(context){
		context.push([	
			'<div class="forms single_form absolute">','</div>',	
		].join(''))		
	}, 

	dynamicForm: SC.TextFieldView.design({
		classNames: ['text_field_signin', 'top_index'],
	  layout: { centerY: 0, left: 95, height: 36, width: 255 },
	  hintBinding: '.parentView.singleFormTitle',
	  isPassword: NO,
	  isTextArea: NO
	})

});; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('cloudos');