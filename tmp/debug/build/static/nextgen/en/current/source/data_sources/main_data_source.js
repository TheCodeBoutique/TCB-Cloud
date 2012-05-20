// ==========================================================================
// Project:   Nextgen.MainDataSource
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Nextgen */

/** @class

  (Document Your Data Source Here)

 @extends SC.DataSource
 */
Nextgen.MainDataSource = SC.DataSource.extend({

  // ..........................................................
  // QUERY SUPPORT
  //
  fetch: function(store, query) {
    /**
     * different url
     */
    var url;

    if (query.recordType === Nextgen.Application) {
//      url = '/application.json'
      url = 'http://api.orchestra.io/application.json'
    }

    $.ajax({
      url:url,
      type:'GET',
      dataType: 'jsonp',
      data:{jsonp_callback:"fetchDidComplete"},
      crossDomain: true,
      success: function(data) {
      },
      complete: function(data) {
        console.log("complete");
      },
      error: function(e) {
        console.log("error");
      }
    });
//
//    SC.Request.getUrl(url)
//      .notify(this, 'fetchDidComplete', store, query)
//      .header('Authorization',	'Digest username="ceubanks@thecodeboutique.com", realm="api.orchestra.io", nonce="1bbfbc0a4ff83d57872a938a6ea516df", response="acb95e48d2c6d6b9ffddfbcf4ecaf306", opaque="94619f8a70068b2591c2eed622525b0e", algorithm="MD5", cnonce="876021c09098e851365a4884323d5127", nc=00000001, qop="auth"')
//      .json()
//      .send();
//
//    return YES;
  },


  /**
   * fetch did complete handles the response form SC
   * @param response
   * @param store
   * @param query
   */
  fetchDidComplete: function(response, store, query) {

  },

  // ..........................................................
  // RECORD SUPPORT
  // 

  retrieveRecord: function(store, storeKey) {

    // TODO: Add handlers to retrieve an individual record's contents
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO; // return YES if you handled the storeKey
  },

  createRecord: function(store, storeKey) {

    // TODO: Add handlers to submit new records to the data source.
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO; // return YES if you handled the storeKey
  },

  updateRecord: function(store, storeKey) {

    // TODO: Add handlers to submit modified record to the data source
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO; // return YES if you handled the storeKey
  },

  destroyRecord: function(store, storeKey) {

    // TODO: Add handlers to destroy records on the data source.
    // call store.dataSourceDidDestroy(storeKey) when done

    return NO; // return YES if you handled the storeKey
  }

});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('nextgen');