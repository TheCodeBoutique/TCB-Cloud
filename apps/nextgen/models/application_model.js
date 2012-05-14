/** @class

  (Document your Model here)

 @extends SC.Record
 @version 0.1
 */
Nextgen.Application = SC.Record.extend({

  domain: SC.Record.attr(String, { key: 'domain' }),
  href: SC.Record.attr(Boolean, { key: 'href' }),
  primaryKey: SC.Record.attr(Boolean, { key: 'id' }),
  name: SC.Record.attr(SC.DateTime, { key: 'name' })

//  license: SC.Record.toOne('Wheelz.License', {
//    key: 'driver_license',
//    isNested: YES
//  }),

});

Nextgen.ApplicationQuery = SC.Query.remote(Nextgen.Application);