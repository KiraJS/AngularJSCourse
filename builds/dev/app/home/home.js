;(function(){
  'use strict';

  angular
    .module('fit.home', [
    ])
    .controller('HomeCtrl', HomeController)
    .run(/*@ngInject*/function($log){$log.debug('Home Run')})
    .config(HomeConfig)
    .filter('eye', EyeFilter);


    /**
     * Home Controller
     */
    // @ngInject
    function HomeController($scope, $log, $rootScope, Value, CONSTANT, MainFactory, MainService)
    {
      $log.debug('HomeController');
      var s = this;

      var jsonUser = [
        {
          "_id": "5661677e642276771f9df372",
          "index": 0,
          "picture": "http://placehold.it/32x32",
          "age": 22,
          "eyeColor": "green",
          "name": "Ginger Farrell"
        },
        {
          "_id": "5661677edddf416502958381",
          "index": 1,
          "picture": "http://placehold.it/32x32",
          "age": 26,
          "eyeColor": "brown",
          "name": "Huffman Wyatt"
        },
        {
          "_id": "5661677ec9fd2c9b97386bf6",
          "index": 2,
          "picture": "http://placehold.it/32x32",
          "age": 37,
          "eyeColor": "blue",
          "name": "Wilma Jordan"
        },
        {
          "_id": "5661677e817c49aee23b7ea0",
          "index": 3,
          "picture": "http://placehold.it/32x32",
          "age": 35,
          "eyeColor": "green",
          "name": "Jackie Davenport"
        },
        {
          "_id": "5661677e8e313caea6b5e6de",
          "index": 4,
          "picture": "http://placehold.it/32x32",
          "age": 29,
          "eyeColor": "green",
          "name": "Lakeisha Marshall"
        },
        {
          "_id": "5661677e2307d0f043034a87",
          "index": 5,
          "picture": "http://placehold.it/32x32",
          "age": 37,
          "eyeColor": "blue",
          "name": "Jill Hogan"
        },
        {
          "_id": "5661677e7effc7610e56ed41",
          "index": 6,
          "picture": "http://placehold.it/32x32",
          "age": 26,
          "eyeColor": "brown",
          "name": "Osborne Rogers"
        },
        {
          "_id": "5661677ee4828496b2fef042",
          "index": 7,
          "picture": "http://placehold.it/32x32",
          "age": 30,
          "eyeColor": "blue",
          "name": "Marylou Wood"
        },
        {
          "_id": "5661677ecb1020cf12d6c4ae",
          "index": 8,
          "picture": "http://placehold.it/32x32",
          "age": 23,
          "eyeColor": "green",
          "name": "Dona Sosa"
        },
        {
          "_id": "5661677eeacd77b03103dc09",
          "index": 9,
          "picture": "http://placehold.it/32x32",
          "age": 27,
          "eyeColor": "brown",
          "name": "Maryann Burgess"
        },
        {
          "_id": "5661677ee61b1d2ecffef4c6",
          "index": 10,
          "picture": "http://placehold.it/32x32",
          "age": 21,
          "eyeColor": "brown",
          "name": "Dixon Rosario"
        },
        {
          "_id": "5661677e3bd494674ff09d47",
          "index": 11,
          "picture": "http://placehold.it/32x32",
          "age": 26,
          "eyeColor": "brown",
          "name": "Lewis Burnett"
        },
        {
          "_id": "5661677ebe80f2832ee059d7",
          "index": 12,
          "picture": "http://placehold.it/32x32",
          "age": 37,
          "eyeColor": "blue",
          "name": "Lorena Rios"
        },
        {
          "_id": "5661677e195ea33a9b5dcac4",
          "index": 13,
          "picture": "http://placehold.it/32x32",
          "age": 37,
          "eyeColor": "blue",
          "name": "Maldonado Cardenas"
        },
        {
          "_id": "5661677e3a9466e5750498b5",
          "index": 14,
          "picture": "http://placehold.it/32x32",
          "age": 24,
          "eyeColor": "green",
          "name": "Ball Mckenzie"
        },
        {
          "_id": "5661677e23d37bfb103834b1",
          "index": 15,
          "picture": "http://placehold.it/32x32",
          "age": 23,
          "eyeColor": "brown",
          "name": "Rhodes Fry"
        },
        {
          "_id": "5661677e1c03a9f15f8f0a17",
          "index": 16,
          "picture": "http://placehold.it/32x32",
          "age": 26,
          "eyeColor": "blue",
          "name": "Maddox Mueller"
        },
        {
          "_id": "5661677e47c04aa00c10c5e3",
          "index": 17,
          "picture": "http://placehold.it/32x32",
          "age": 35,
          "eyeColor": "blue",
          "name": "Freida Herring"
        },
        {
          "_id": "5661677e1f1d428a6494ab8e",
          "index": 18,
          "picture": "http://placehold.it/32x32",
          "age": 23,
          "eyeColor": "blue",
          "name": "Amalia Trujillo"
        },
        {
          "_id": "5661677e1f6435df8a00e90f",
          "index": 19,
          "picture": "http://placehold.it/32x32",
          "age": 31,
          "eyeColor": "brown",
          "name": "Tasha Mcleod"
        },
        {
          "_id": "5661677e9ea70a69ee073e72",
          "index": 20,
          "picture": "http://placehold.it/32x32",
          "age": 39,
          "eyeColor": "green",
          "name": "David Lindsay"
        },
        {
          "_id": "5661677eb5fee81bd24fdb35",
          "index": 21,
          "picture": "http://placehold.it/32x32",
          "age": 31,
          "eyeColor": "green",
          "name": "Hamilton Morrison"
        },
        {
          "_id": "5661677e17013b1ae7ef82da",
          "index": 22,
          "picture": "http://placehold.it/32x32",
          "age": 23,
          "eyeColor": "blue",
          "name": "Tina Mcknight"
        },
        {
          "_id": "5661677e16a5af5de270949c",
          "index": 23,
          "picture": "http://placehold.it/32x32",
          "age": 28,
          "eyeColor": "blue",
          "name": "Savage Goodwin"
        },
        {
          "_id": "5661677eb2b64a27580bc3e3",
          "index": 24,
          "picture": "http://placehold.it/32x32",
          "age": 38,
          "eyeColor": "green",
          "name": "Mckenzie Foreman"
        },
        {
          "_id": "5661677eafae5d07d8845032",
          "index": 25,
          "picture": "http://placehold.it/32x32",
          "age": 36,
          "eyeColor": "green",
          "name": "Eileen Prince"
        },
        {
          "_id": "5661677e521f1f37e91ea0fc",
          "index": 26,
          "picture": "http://placehold.it/32x32",
          "age": 25,
          "eyeColor": "blue",
          "name": "Heather Valentine"
        },
        {
          "_id": "5661677ee3d508607cb952dd",
          "index": 27,
          "picture": "http://placehold.it/32x32",
          "age": 40,
          "eyeColor": "blue",
          "name": "Leanne Moses"
        },
        {
          "_id": "5661677e0af35eb2aa203796",
          "index": 28,
          "picture": "http://placehold.it/32x32",
          "age": 21,
          "eyeColor": "blue",
          "name": "Wolfe Sears"
        },
        {
          "_id": "5661677ed0dd44c60a842b2c",
          "index": 29,
          "picture": "http://placehold.it/32x32",
          "age": 27,
          "eyeColor": "brown",
          "name": "Bertie Hines"
        },
        {
          "_id": "5661677ecb3b40183e0922bd",
          "index": 30,
          "picture": "http://placehold.it/32x32",
          "age": 28,
          "eyeColor": "brown",
          "name": "Matthews Shaffer"
        },
        {
          "_id": "5661677e0ffc9f3aaeb4ffdb",
          "index": 31,
          "picture": "http://placehold.it/32x32",
          "age": 22,
          "eyeColor": "green",
          "name": "Carla Hahn"
        },
        {
          "_id": "5661677e042055090af59484",
          "index": 32,
          "picture": "http://placehold.it/32x32",
          "age": 34,
          "eyeColor": "brown",
          "name": "Mcdonald Joyner"
        },
        {
          "_id": "5661677e7e7ca13b34e34039",
          "index": 33,
          "picture": "http://placehold.it/32x32",
          "age": 31,
          "eyeColor": "green",
          "name": "Fisher Welch"
        },
        {
          "_id": "5661677eef7e0c0bb74bedb8",
          "index": 34,
          "picture": "http://placehold.it/32x32",
          "age": 25,
          "eyeColor": "green",
          "name": "Melody May"
        },
        {
          "_id": "5661677e5b17036662c6864a",
          "index": 35,
          "picture": "http://placehold.it/32x32",
          "age": 22,
          "eyeColor": "brown",
          "name": "Carmela Leonard"
        },
        {
          "_id": "5661677efa881e17b930a80f",
          "index": 36,
          "picture": "http://placehold.it/32x32",
          "age": 21,
          "eyeColor": "brown",
          "name": "Cooley Carver"
        },
        {
          "_id": "5661677ebd2dc18ab5e7984f",
          "index": 37,
          "picture": "http://placehold.it/32x32",
          "age": 24,
          "eyeColor": "green",
          "name": "Katharine Anthony"
        },
        {
          "_id": "5661677e552f7158a20195ba",
          "index": 38,
          "picture": "http://placehold.it/32x32",
          "age": 36,
          "eyeColor": "blue",
          "name": "Araceli Wilson"
        },
        {
          "_id": "5661677e39b05aefaacd4b28",
          "index": 39,
          "picture": "http://placehold.it/32x32",
          "age": 20,
          "eyeColor": "green",
          "name": "Ross Bryan"
        },
        {
          "_id": "5661677edd1c013a92d32d1a",
          "index": 40,
          "picture": "http://placehold.it/32x32",
          "age": 32,
          "eyeColor": "green",
          "name": "Boyd Mcclain"
        },
        {
          "_id": "5661677e73da0a134573a4d2",
          "index": 41,
          "picture": "http://placehold.it/32x32",
          "age": 23,
          "eyeColor": "brown",
          "name": "Andrea Robbins"
        },
        {
          "_id": "5661677ef75837112fa0e77d",
          "index": 42,
          "picture": "http://placehold.it/32x32",
          "age": 23,
          "eyeColor": "brown",
          "name": "Ingrid Buchanan"
        },
        {
          "_id": "5661677ea886569db00461a5",
          "index": 43,
          "picture": "http://placehold.it/32x32",
          "age": 29,
          "eyeColor": "green",
          "name": "Eaton Rose"
        },
        {
          "_id": "5661677e6ea06a532b01385f",
          "index": 44,
          "picture": "http://placehold.it/32x32",
          "age": 39,
          "eyeColor": "brown",
          "name": "Newton Coleman"
        },
        {
          "_id": "5661677ee99e3a73fb68de8f",
          "index": 45,
          "picture": "http://placehold.it/32x32",
          "age": 27,
          "eyeColor": "green",
          "name": "Gina Preston"
        },
        {
          "_id": "5661677e869a3bb7a5ddbef1",
          "index": 46,
          "picture": "http://placehold.it/32x32",
          "age": 26,
          "eyeColor": "green",
          "name": "Estelle Blackburn"
        },
        {
          "_id": "5661677e885d9360678d8775",
          "index": 47,
          "picture": "http://placehold.it/32x32",
          "age": 21,
          "eyeColor": "green",
          "name": "Morse Orr"
        },
        {
          "_id": "5661677ea6bf1ff173f276a2",
          "index": 48,
          "picture": "http://placehold.it/32x32",
          "age": 37,
          "eyeColor": "brown",
          "name": "Wilcox Hale"
        },
        {
          "_id": "5661677e7c6ff789314ad28e",
          "index": 49,
          "picture": "http://placehold.it/32x32",
          "age": 28,
          "eyeColor": "green",
          "name": "Reynolds Carrillo"
        },
        {
          "_id": "5661677e91b862b9769bede3",
          "index": 50,
          "picture": "http://placehold.it/32x32",
          "age": 21,
          "eyeColor": "green",
          "name": "Clay Whitaker"
        },
        {
          "_id": "5661677ee03c360c7afa1bd0",
          "index": 51,
          "picture": "http://placehold.it/32x32",
          "age": 31,
          "eyeColor": "blue",
          "name": "Moss Snider"
        },
        {
          "_id": "5661677e115243153b57b641",
          "index": 52,
          "picture": "http://placehold.it/32x32",
          "age": 36,
          "eyeColor": "brown",
          "name": "Jan Roberson"
        },
        {
          "_id": "5661677e8e78050d86dfef24",
          "index": 53,
          "picture": "http://placehold.it/32x32",
          "age": 21,
          "eyeColor": "green",
          "name": "Everett Bender"
        },
        {
          "_id": "5661677ebce323035fd16af9",
          "index": 54,
          "picture": "http://placehold.it/32x32",
          "age": 34,
          "eyeColor": "green",
          "name": "Brenda Mack"
        },
        {
          "_id": "5661677e39742213f1adb7dc",
          "index": 55,
          "picture": "http://placehold.it/32x32",
          "age": 25,
          "eyeColor": "brown",
          "name": "Johnston Pittman"
        },
        {
          "_id": "5661677e77c1691891147438",
          "index": 56,
          "picture": "http://placehold.it/32x32",
          "age": 29,
          "eyeColor": "green",
          "name": "Riddle Parker"
        },
        {
          "_id": "5661677e449523ebbb899c80",
          "index": 57,
          "picture": "http://placehold.it/32x32",
          "age": 37,
          "eyeColor": "blue",
          "name": "Andrews Stokes"
        },
        {
          "_id": "5661677eab31909fd5a230d1",
          "index": 58,
          "picture": "http://placehold.it/32x32",
          "age": 34,
          "eyeColor": "brown",
          "name": "Miller Clay"
        },
        {
          "_id": "5661677e07b97ab5fc7b46c5",
          "index": 59,
          "picture": "http://placehold.it/32x32",
          "age": 27,
          "eyeColor": "green",
          "name": "Tricia Fulton"
        },
        {
          "_id": "5661677e36df4a329389e6e8",
          "index": 60,
          "picture": "http://placehold.it/32x32",
          "age": 32,
          "eyeColor": "brown",
          "name": "Webster Kidd"
        },
        {
          "_id": "5661677edfcd8e5763551908",
          "index": 61,
          "picture": "http://placehold.it/32x32",
          "age": 30,
          "eyeColor": "brown",
          "name": "Holden Bird"
        },
        {
          "_id": "5661677ee1c917429ce5edca",
          "index": 62,
          "picture": "http://placehold.it/32x32",
          "age": 28,
          "eyeColor": "brown",
          "name": "Juarez Wheeler"
        },
        {
          "_id": "5661677e19e0f44dbec490d3",
          "index": 63,
          "picture": "http://placehold.it/32x32",
          "age": 32,
          "eyeColor": "brown",
          "name": "Floyd Ross"
        },
        {
          "_id": "5661677eea2fce4e60a7549d",
          "index": 64,
          "picture": "http://placehold.it/32x32",
          "age": 24,
          "eyeColor": "blue",
          "name": "Suzanne Weaver"
        },
        {
          "_id": "5661677eb1d9ae05ff60d0ec",
          "index": 65,
          "picture": "http://placehold.it/32x32",
          "age": 30,
          "eyeColor": "brown",
          "name": "Beach Ortega"
        },
        {
          "_id": "5661677e43883edcdfa60565",
          "index": 66,
          "picture": "http://placehold.it/32x32",
          "age": 20,
          "eyeColor": "brown",
          "name": "Wyatt Morrow"
        },
        {
          "_id": "5661677eb091801541159d3b",
          "index": 67,
          "picture": "http://placehold.it/32x32",
          "age": 35,
          "eyeColor": "brown",
          "name": "Lottie Douglas"
        },
        {
          "_id": "5661677e3e359f12af38e6dd",
          "index": 68,
          "picture": "http://placehold.it/32x32",
          "age": 21,
          "eyeColor": "blue",
          "name": "Yolanda Calhoun"
        },
        {
          "_id": "5661677e7bd1eeef4a62a3f2",
          "index": 69,
          "picture": "http://placehold.it/32x32",
          "age": 22,
          "eyeColor": "green",
          "name": "Stewart Alford"
        },
        {
          "_id": "5661677e0f3e05a0bb169749",
          "index": 70,
          "picture": "http://placehold.it/32x32",
          "age": 25,
          "eyeColor": "green",
          "name": "Cara Ortiz"
        },
        {
          "_id": "5661677e6c824ef96d59c466",
          "index": 71,
          "picture": "http://placehold.it/32x32",
          "age": 27,
          "eyeColor": "brown",
          "name": "Lea Butler"
        },
        {
          "_id": "5661677e2a75501a57c7668c",
          "index": 72,
          "picture": "http://placehold.it/32x32",
          "age": 33,
          "eyeColor": "green",
          "name": "Barker Peterson"
        },
        {
          "_id": "5661677ec5ac6d5cf3e81026",
          "index": 73,
          "picture": "http://placehold.it/32x32",
          "age": 22,
          "eyeColor": "green",
          "name": "Melissa Gray"
        },
        {
          "_id": "5661677ebb9e5008afa76dc2",
          "index": 74,
          "picture": "http://placehold.it/32x32",
          "age": 38,
          "eyeColor": "brown",
          "name": "Bobbi Riddle"
        },
        {
          "_id": "5661677eb388b53022128872",
          "index": 75,
          "picture": "http://placehold.it/32x32",
          "age": 40,
          "eyeColor": "brown",
          "name": "Malone Hood"
        },
        {
          "_id": "5661677e9406bef34af59f1d",
          "index": 76,
          "picture": "http://placehold.it/32x32",
          "age": 36,
          "eyeColor": "green",
          "name": "Doris Fuentes"
        },
        {
          "_id": "5661677e49adbc64f5aff5f7",
          "index": 77,
          "picture": "http://placehold.it/32x32",
          "age": 38,
          "eyeColor": "green",
          "name": "Dana Blevins"
        },
        {
          "_id": "5661677e043943f33dec6a6d",
          "index": 78,
          "picture": "http://placehold.it/32x32",
          "age": 29,
          "eyeColor": "brown",
          "name": "Clarke Fitzpatrick"
        },
        {
          "_id": "5661677ef8b2b2974be351a2",
          "index": 79,
          "picture": "http://placehold.it/32x32",
          "age": 32,
          "eyeColor": "brown",
          "name": "Holloway Curtis"
        },
        {
          "_id": "5661677ef350cea3045f0d0a",
          "index": 80,
          "picture": "http://placehold.it/32x32",
          "age": 35,
          "eyeColor": "blue",
          "name": "Michele Wright"
        },
        {
          "_id": "5661677e5bd387d14c2cab7c",
          "index": 81,
          "picture": "http://placehold.it/32x32",
          "age": 20,
          "eyeColor": "green",
          "name": "Keri Rivas"
        },
        {
          "_id": "5661677e22c89342739927cc",
          "index": 82,
          "picture": "http://placehold.it/32x32",
          "age": 36,
          "eyeColor": "brown",
          "name": "Bartlett Franco"
        },
        {
          "_id": "5661677e8f39a7c6a436e4a5",
          "index": 83,
          "picture": "http://placehold.it/32x32",
          "age": 28,
          "eyeColor": "blue",
          "name": "Grimes Kennedy"
        },
        {
          "_id": "5661677e94b5cfdadd0f98c6",
          "index": 84,
          "picture": "http://placehold.it/32x32",
          "age": 40,
          "eyeColor": "blue",
          "name": "Dillon Browning"
        },
        {
          "_id": "5661677e99e762244f459122",
          "index": 85,
          "picture": "http://placehold.it/32x32",
          "age": 34,
          "eyeColor": "brown",
          "name": "Leann Haney"
        },
        {
          "_id": "5661677edab3bde38ecaabaf",
          "index": 86,
          "picture": "http://placehold.it/32x32",
          "age": 27,
          "eyeColor": "blue",
          "name": "Dunn Estrada"
        },
        {
          "_id": "5661677edb893f0d813eb304",
          "index": 87,
          "picture": "http://placehold.it/32x32",
          "age": 31,
          "eyeColor": "green",
          "name": "Candy Wilkerson"
        },
        {
          "_id": "5661677eac9e57e8cfd3fcfa",
          "index": 88,
          "picture": "http://placehold.it/32x32",
          "age": 36,
          "eyeColor": "green",
          "name": "Mcmillan Dixon"
        },
        {
          "_id": "5661677eef7ee010f9acc603",
          "index": 89,
          "picture": "http://placehold.it/32x32",
          "age": 23,
          "eyeColor": "brown",
          "name": "Leigh Bush"
        },
        {
          "_id": "5661677e65e9d6160b5d19f4",
          "index": 90,
          "picture": "http://placehold.it/32x32",
          "age": 32,
          "eyeColor": "brown",
          "name": "Stanley Key"
        },
        {
          "_id": "5661677ea6c92a7cd19b4568",
          "index": 91,
          "picture": "http://placehold.it/32x32",
          "age": 27,
          "eyeColor": "green",
          "name": "Mccoy Noel"
        },
        {
          "_id": "5661677e3253809a37bcf274",
          "index": 92,
          "picture": "http://placehold.it/32x32",
          "age": 23,
          "eyeColor": "brown",
          "name": "Hart Perry"
        },
        {
          "_id": "5661677e9ed86ba041f0d7e6",
          "index": 93,
          "picture": "http://placehold.it/32x32",
          "age": 38,
          "eyeColor": "brown",
          "name": "Duncan Rivera"
        },
        {
          "_id": "5661677ef1bdb824206bb47b",
          "index": 94,
          "picture": "http://placehold.it/32x32",
          "age": 34,
          "eyeColor": "green",
          "name": "Eugenia Gordon"
        },
        {
          "_id": "5661677e75caf5688fb79069",
          "index": 95,
          "picture": "http://placehold.it/32x32",
          "age": 33,
          "eyeColor": "blue",
          "name": "Palmer Rollins"
        },
        {
          "_id": "5661677eb34ef52d5644396e",
          "index": 96,
          "picture": "http://placehold.it/32x32",
          "age": 36,
          "eyeColor": "brown",
          "name": "Mays Maynard"
        },
        {
          "_id": "5661677e1e10c888d53fd99e",
          "index": 97,
          "picture": "http://placehold.it/32x32",
          "age": 22,
          "eyeColor": "green",
          "name": "Sasha Holmes"
        },
        {
          "_id": "5661677e0059fffbf6e11e7e",
          "index": 98,
          "picture": "http://placehold.it/32x32",
          "age": 20,
          "eyeColor": "brown",
          "name": "Laura Nicholson"
        },
        {
          "_id": "5661677e3a5d90a3681b71ee",
          "index": 99,
          "picture": "http://placehold.it/32x32",
          "age": 32,
          "eyeColor": "green",
          "name": "Lela Munoz"
        }
      ];
      s.users = jsonUser;
      s.date = +new Date ();
      s.eyeColor = [ 'all', 'blue', 'green', 'brown'];
      s.curentColor = '';
      s.strictEyeColor = false;
      s.changeColor = function(color) {
        if (color == 'all') {
          s.strictEyeColor = false;
          s.curentColor = '';
        } else {
          s.curentColor = color;
          s.strictEyeColor = true;
        }
      };


      // console.log('CONSTANT: ' ,  CONSTANT);
      // console.log('Value: ', Value.val);
      // console.log('MainFactory: count: ', MainFactory.count);
      // console.log('MainService: count: ', MainService.count);
      //
      // MainFactory.plus().plus().plus();
      // MainFactory.count = 0;
      // MainService.plus().plus().plus();
      // MainService.count = 0;
      //
      // console.log('MainFactory: count: ', MainFactory.count);
      // MainFactory.plus();
      // console.log('MainFactory: count: ', MainFactory.count);
      //
      // console.log('MainService: count: ', MainService.count);
      // MainService.plus();
      // console.log('MainService: count: ', MainService.count);
      //
      // MainFactory.plus().plus().plus();
      // MainFactory.count = 0;
      // console.log('MainFactory: count: ', MainFactory.count);
      // MainFactory.plus();
      // console.log('MainFactory: count: ', MainFactory.count);



      $rootScope.currentPage = 'home';

      s.title = "Home Page";
      s.name = "Loftschool";
      s.valuables = ['We are the best', 'We are awesome'];

      s.addValuable = function(_newVal){
        s.valuables.push(_newVal);
      }
    }

    // @ngInject
    function HomeConfig ($stateProvider) {
      console.log('Home Config');
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'app/home/home.html',
          controller: 'HomeCtrl',
          controllerAs: 'hc'
        });
    }

    // @ngInject
    function EyeFilter() {
      return function(input) {
        var color;
        if (input === 'green') {
          color = "зеленый"
        }
        else if (input === 'brown') {
          color = "коричневый"
        }
        else if (input === 'blue') {
          color = "голубой"
        }
        else {
          color = "все"
        }
        return color;
      }
    }

})();
