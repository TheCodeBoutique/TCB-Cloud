// ==========================================================================
// Project:   Nextgen
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Nextgen */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Nextgen.main = function main() {

  // Step 1: Tell your app it will load via states
  var statechart = Nextgen.statechart;
  SC.RootResponder.responder.set('defaultResponder', statechart); 
  statechart.initStatechart();

};

function main() { Nextgen.main(); }

onload = function() {
	var a = $(document).width();
	console.log("a = " + a);
	
	Nextgen.viewsController.set('animateSize', a);
	
	var tmp = Nextgen.viewsController.animateSize
	console.log("Current Controllers animate value is ", Nextgen.viewsController.animateSize);
	
	
	onresize = function(event) {
	
 		var b = $(document).width();
 			console.log("b = " + b);
			
		if (a-b === 0) {
			console.log("truth is first");
			Nextgen.viewsController.set('animateSize', a);
		} else if (a-b != a) {
			console.log("truth is second");
			Nextgen.viewsController.set('animateSize', b);
		} 

		console.log("Current Controllers animate value is ", Nextgen.viewsController.animateSize);

	}
	
}



