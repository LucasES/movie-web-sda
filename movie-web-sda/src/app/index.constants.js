/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('movieWebSda')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('OAuthProvider', {
      url: 'http://localhost:8080/sda-services/oauth/token',
      urlRefreshToken: 'http://localhost:8080/sda-services/oauth/token?grant_type=refresh_token&refresh_token=',
      username: 'admin',
      password: 'password',
      client: 'client',
      secret: 'secret',
      grantTypePassword: 'password'
    })
    .constant('API', {
      baseUrl: 'http://localhost:8080/sda-services/',
      accessToken: '?access_token=',
      getMovies: 'api/filme/',
      getAllGenre: 'api/genero/'
    });

})();
