(function() {
    'use strict';

    angular
        .module('random-memes')
        .controller('MemeController', MemeController);

    MemeController.$inject = ['randomFactsFactory'];

    /* @ngInject */
    function MemeController(randomFactsFactory) {
        var vm = this;


        vm.generateRandomFact = generateRandomFact;
        vm.getRandomImage = getRandomImage;
        /////////////////////

        function generateRandomFact(term) {
            randomFactsFactory
                .generateRandomFact(term)
                .then(function(response) {
                    vm.response = response.data.quote;
                });

        }


        function getRandomImage() {
            var images = [

                {
                    "name": "crazypills",
                    "url": "https://memegen.link/crazypills/_/_.jpg"
                }, {
                    "name": "tenguy",
                    "url": "https://memegen.link/tenguy/_/_.jpg"
                }, {
                    "name": "afraid",
                    "url": "https://memegen.link/afraid/_/_.jpg"
                }, {
                    "name": "older",
                    "url": "https://memegen.link/older/_/_.jpg"
                }, {
                    "name": "aag",
                    "url": "https://memegen.link/aag/_/_.jpg"
                }, {
                    "name": "tried",
                    "url": "https://memegen.link/tried/_/_.jpg"
                }, {
                    "name": "biw",
                    "url": "https://memegen.link/biw/_/_.jpg"
                }, {
                    "name": "blb",
                    "url": "https://memegen.link/blb/_/_.jpg"
                }, {
                    "name": "kermit",
                    "url": "https://memegen.link/kermit/_/_.jpg"
                }, {
                    "name": "bd",
                    "url": "https://memegen.link/bd/_/_.jpg"
                }, {
                    "name": "ch",
                    "url": "https://memegen.link/ch/_/_.jpg"
                }, {
                    "name": "cbg",
                    "url": "https://memegen.link/cbg/_/_.jpg"
                }, {
                    "name": "wonka",
                    "url": "https://memegen.link/wonka/_/_.jpg"
                }, {
                    "name": "cb",
                    "url": "https://memegen.link/cb/_/_.jpg"
                }, {
                    "name": "keanu",
                    "url": "https://memegen.link/keanu/_/_.jpg"
                }, {
                    "name": "dsm",
                    "url": "https://memegen.link/dsm/_/_.jpg"
                }, {
                    "name": "live",
                    "url": "https://memegen.link/live/_/_.jpg"
                }, {
                    "name": "ants",
                    "url": "https://memegen.link/ants/_/_.jpg"
                }, {
                    "name": "doge",
                    "url": "https://memegen.link/doge/_/_.jpg"
                }, {
                    "name": "alwaysonbeat",
                    "url": "https://memegen.link/alwaysonbeat/_/_.jpg"
                }, {
                    "name": "ermg",
                    "url": "https://memegen.link/ermg/_/_.jpg"
                }, {
                    "name": "facepalm",
                    "url": "https://memegen.link/facepalm/_/_.jpg"
                }, {
                    "name": "fwp",
                    "url": "https://memegen.link/fwp/_/_.jpg"
                }, {
                    "name": "fa",
                    "url": "https://memegen.link/fa/_/_.jpg"
                }, {
                    "name": "fbf",
                    "url": "https://memegen.link/fbf/_/_.jpg"
                }, {
                    "name": "fmr",
                    "url": "https://memegen.link/fmr/_/_.jpg"
                }, {
                    "name": "fry",
                    "url": "https://memegen.link/fry/_/_.jpg"
                }, {
                    "name": "ggg",
                    "url": "https://memegen.link/ggg/_/_.jpg"
                }, {
                    "name": "hipster",
                    "url": "https://memegen.link/hipster/_/_.jpg"
                }, {
                    "name": "icanhas",
                    "url": "https://memegen.link/icanhas/_/_.jpg"
                }, {
                    "name": "crazypills",
                    "url": "https://memegen.link/crazypills/_/_.jpg"
                }, {
                    "name": "mw",
                    "url": "https://memegen.link/mw/_/_.jpg"
                }, {
                    "name": "noidea",
                    "url": "https://memegen.link/noidea/_/_.jpg"
                }, {
                    "name": "regret",
                    "url": "https://memegen.link/regret/_/_.jpg"
                }, {
                    "name": "boat",
                    "url": "https://memegen.link/boat/_/_.jpg"
                }, {
                    "name": "hagrid",
                    "url": "https://memegen.link/hagrid/_/_.jpg"
                }, {
                    "name": "sohappy",
                    "url": "https://memegen.link/sohappy/_/_.jpg"
                }, {
                    "name": "captain",
                    "url": "https://memegen.link/captain/_/_.jpg"
                }, {
                    "name": "inigo",
                    "url": "https://memegen.link/inigo/_/_.jpg"
                }, {
                    "name": "iw",
                    "url": "https://memegen.link/iw/_/_.jpg"
                }, {
                    "name": "ackbar",
                    "url": "https://memegen.link/ackbar/_/_.jpg"
                }, {
                    "name": "happening",
                    "url": "https://memegen.link/happening/_/_.jpg"
                }, {
                    "name": "joker",
                    "url": "https://memegen.link/joker/_/_.jpg"
                }, {
                    "name": "ive",
                    "url": "https://memegen.link/ive/_/_.jpg"
                }, {
                    "name": "ll",
                    "url": "https://memegen.link/ll/_/_.jpg"
                }, {
                    "name": "morpheus",
                    "url": "https://memegen.link/morpheus/_/_.jpg"
                }, {
                    "name": "badchoice",
                    "url": "https://memegen.link/badchoice/_/_.jpg"
                }, {
                    "name": "mmm",
                    "url": "https://memegen.link/mmm/_/_.jpg"
                }, {
                    "name": "jetpack",
                    "url": "https://memegen.link/jetpack/_/_.jpg"
                }, {
                    "name": "imsorry",
                    "url": "https://memegen.link/imsorry/_/_.jpg"
                }, {
                    "name": "red",
                    "url": "https://memegen.link/red/_/_.jpg"
                }, {
                    "name": "mordor",
                    "url": "https://memegen.link/mordor/_/_.jpg"
                }, {
                    "name": "oprah",
                    "url": "https://memegen.link/oprah/_/_.jpg"
                }, {
                    "name": "oag",
                    "url": "https://memegen.link/oag/_/_.jpg"
                }, {
                    "name": "remembers",
                    "url": "https://memegen.link/remembers/_/_.jpg"
                }, {
                    "name": "philosoraptor",
                    "url": "https://memegen.link/philosoraptor/_/_.jpg"
                }, {
                    "name": "jw",
                    "url": "https://memegen.link/jw/_/_.jpg"
                }, {
                    "name": "patrick",
                    "url": "https://memegen.link/patrick/_/_.jpg"
                }, {
                    "name": "sad-obama",
                    "url": "https://memegen.link/sad-obama/_/_.jpg"
                }, {
                    "name": "sad-clinton",
                    "url": "https://memegen.link/sad-clinton/_/_.jpg"
                }, {
                    "name": "sadfrog",
                    "url": "https://memegen.link/sadfrog/_/_.jpg"
                }, {
                    "name": "sad-bush",
                    "url": "https://memegen.link/sad-bush/_/_.jpg"
                }, {
                    "name": "sad-biden",
                    "url": "https://memegen.link/sad-biden/_/_.jpg"
                }, {
                    "name": "sad-boehner",
                    "url": "https://memegen.link/sad-boehner/_/_.jpg"
                }, {
                    "name": "sarcasticbear",
                    "url": "https://memegen.link/sarcasticbear/_/_.jpg"
                }, {
                    "name": "dwight",
                    "url": "https://memegen.link/dwight/_/_.jpg"
                }, {
                    "name": "sb",
                    "url": "https://memegen.link/sb/_/_.jpg"
                }, {
                    "name": "ss",
                    "url": "https://memegen.link/ss/_/_.jpg"
                }, {
                    "name": "sf",
                    "url": "https://memegen.link/sf/_/_.jpg"
                }, {
                    "name": "dodgson",
                    "url": "https://memegen.link/dodgson/_/_.jpg"
                }, {
                    "name": "money",
                    "url": "https://memegen.link/money/_/_.jpg"
                }, {
                    "name": "sohot",
                    "url": "https://memegen.link/sohot/_/_.jpg"
                }, {
                    "name": "goinforme",
                    "url": "https://memegen.link/goinforme/_/_.jpg"
                }, {
                    "name": "awesome-awkward",
                    "url": "https://memegen.link/awesome-awkward/_/_.jpg"
                }, {
                    "name": "awesome",
                    "url": "https://memegen.link/awesome/_/_.jpg"
                }, {
                    "name": "awkward-awesome",
                    "url": "https://memegen.link/awkward-awesome/_/_.jpg"
                }, {
                    "name": "awkward",
                    "url": "https://memegen.link/awkward/_/_.jpg"
                }, {
                    "name": "fetch",
                    "url": "https://memegen.link/fetch/_/_.jpg"
                }, {
                    "name": "success",
                    "url": "https://memegen.link/success/_/_.jpg"
                }, {
                    "name": "ski",
                    "url": "https://memegen.link/ski/_/_.jpg"
                }, {
                    "name": "officespace",
                    "url": "https://memegen.link/officespace/_/_.jpg"
                }, {
                    "name": "interesting",
                    "url": "https://memegen.link/interesting/_/_.jpg"
                }, {
                    "name": "toohigh",
                    "url": "https://memegen.link/toohigh/_/_.jpg"
                }, {
                    "name": "bs",
                    "url": "https://memegen.link/bs/_/_.jpg"
                }, {
                    "name": "center",
                    "url": "https://memegen.link/center/_/_.jpg"
                }, {
                    "name": "both",
                    "url": "https://memegen.link/both/_/_.jpg"
                }, {
                    "name": "winter",
                    "url": "https://memegen.link/winter/_/_.jpg"
                }, {
                    "name": "xy",
                    "url": "https://memegen.link/xy/_/_.jpg"
                }, {
                    "name": "buzz",
                    "url": "https://memegen.link/buzz/_/_.jpg"
                }, {
                    "name": "yodawg",
                    "url": "https://memegen.link/yodawg/_/_.jpg"
                }, {
                    "name": "yuno",
                    "url": "https://memegen.link/yuno/_/_.jpg"
                }, {
                    "name": "yallgot",
                    "url": "https://memegen.link/yallgot/_/_.jpg"
                }, {
                    "name": "bad",
                    "url": "https://memegen.link/bad/_/_.jpg"
                }, {
                    "name": "elf",
                    "url": "https://memegen.link/elf/_/_.jpg"
                }, {
                    "name": "chosen",
                    "url": "https://memegen.link/chosen/_/_.jpg"
                }
            ]

            vm.randomImage = images[Math.floor(Math.random() * images.length)];

            function generateMeme() {
                var top = vm.response.split(',')[0];
                var bottom = vm.response.split(',')[1];

                vm.completeMemeUrl =
                    'https://memegen.link/' +
                    vm.randomImage.name +
                    '/' +
                    top.trim().split(' ').join('-') +
                    '/' +
                    bottom.trim().split(' ').join('-') + '.jpg'
            }
            generateMeme();


        }

    }


})();
