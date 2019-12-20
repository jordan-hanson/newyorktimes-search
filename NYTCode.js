function userSearch() {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?id=3e0adbb0-05ac-45af-a15f-22557326511e&api-key=GvEkVVP76JDuYp26MSr14IAeGQy9XAcB";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (res) {
        console.log(res);

    })


}
function clear() {
    $("#article-section").empty();
}

function buildQueryURL() {
    var searchTerm = $("#search-term").val().trim();
    var startYear = $("#start-year").val().trim();
    var endYear = $("#end-year").val().trim();

    var apiKey = "GvEkVVP76JDuYp26MSr14IAeGQy9XAcB"
    var nytimesurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
    var url = nytimesurl + "q=" + searchTerm + "&end_date=" + endYear + "&begin_date=" + startYear + "&api-key=" + apiKey

    console.log(searchTerm);
    console.log(startYear);
    console.log(endYear);
    console.log(url);
}
$("#run-search").on("click", function (event) {
    event.preventDefault();
    clear();
    buildQueryURL();
    // console.log(url)
})



userSearch()