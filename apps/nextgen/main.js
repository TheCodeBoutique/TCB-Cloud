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

function main() {
  Nextgen.main();
}


function fetchDidComplete(data) {
  if(!data) return;
  var ids = [];
  //TODO most likely will need sparase array if number of app reaches 1000 plus
  for(var i = 0; i < data.length; i++) {
        ids.push(data[i].id);
  }
  //need to tweak send to request to the server
  Nextgen.store.loadRecords(Nextgen.Application, data,ids);

  Nextgen.applicationsController.set('content',Nextgen.store.find(Nextgen.Application));
}


