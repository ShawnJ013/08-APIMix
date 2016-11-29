// (function() {
//     'use strict';

//     angular
//         .module('random-memes')
//         .factory('memeFactory', memeFactory);

//     memeFactory.$inject = ['$http'];

//     /* @ngInject */
//     function memeFactory($http) {
//         var service = {
//             generateNewMeme: generateNewMeme
//         };
//         return service;

//         ////////////////

//         function generateNewMeme(sentence) {

//             return $http
//                 .get(url , {
//                      headers: {
//                          'X-Mashape-Key': 'MpyHqgXWYVmsh1RAvTe31yUW2EWgp1g7tX7jsns15v5nNBm9Pw'
//                      }
//                 });
//         }
//     }
// })();
