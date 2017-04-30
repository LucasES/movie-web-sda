/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('movieWebSda')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('OAuthProvider', {
      url: 'http://localhost:8080/sda-services/oauth/token',
      username: 'admin',
      password: 'admin',
      client: 'client',
      secret: 'secret',
      grantTypePassword: 'password'
    });

})();
