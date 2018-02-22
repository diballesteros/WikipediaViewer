$(document).ready(function () {

    var app = angular.module('WikiViewer', []);

    app.controller('WikiController', function () {

    });

    var results = document.getElementById("results");


    $(document).on('keyup', function (e) {
        if ($("#search").is(":focus") && e.key == "Enter") {



            var call = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=revisions&list=search&rvprop=content&srsearch="
                + document.getElementById("search").value + "&srlimit=15&srprop=snippet";

            var html = '';

            var urly = "https://en.wikipedia.org/?curid=";

            $.getJSON(call, function (json) {
                json.query.search.forEach(function (val) {
                    html += "<li>" + val.title + "</li>";
                });
                results.innerHTML = html;
            });


        }
    });

});