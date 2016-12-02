(function(){
  'use strict';

  angular.module('app')
        .service('JobOfferService', [
        '$q',
        '$http',
        'ApiConnectionService',
        JobOfferService
  ]);

  function JobOfferService($q,$http, ApiConnectionService){
    
    var srv = {};
    srv.offers = {};
    srv.offer = {};

    srv.getOffers = function() {return srv.offers}
    srv.getOffer = function() {console.log(1);return srv.offer}

    srv.getJobOffer = function(userId){
      var request = {};
      request.method = "GET";
      request.path = "jobOffer/" + userId;
      request.data = {};
      ApiConnectionService.callApi(request).then(
        function(response) {
          console.log(response)
          angular.copy(response, srv.offer)
        },
        function(response) {
        }
      );
    }

    srv.getJobOffers = function() {
      var request = {};
      request.method = "GET";
      request.path = "jobOffer/";
      request.data = {};
      ApiConnectionService.callApi(request).then(
        function(response) {
          console.log(srv.offers)
          angular.copy(response, srv.offers)//srv.offers = response;
          console.log(srv.offers)
        },
        function(response) {
          deferred.reject(response);
        }
      );
    }

    srv.createJobOffer = function(jobOffer) {
      var request = {};
      request.method = "POST";
      request.path = "jobOffer/";
      request.data = jobOffer;
      ApiConnectionService.callApi(request).then(
        function(response) {
          console.log(response);
        },
        function(response) {
          console.log(response);
        }
      );
    }

    srv.updateJobOffer = function(jobOffer) {
      var request = {};
      request.method = "PUT";
      request.path = "jobOffer/";
      request.data = jobOffer;
      ApiConnectionService.callApi(request).then(
        function(response) {
          console.log(response);
        },
        function(response) {
          console.log(response);
        }
      );
    }
return srv;
  }

})();