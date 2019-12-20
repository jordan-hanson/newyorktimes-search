function userSearch() {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?id=3e0adbb0-05ac-45af-a15f-22557326511e&api-key=GvEkVVP76JDuYp26MSr14IAeGQy9XAcB";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (res) {
        console.log(res);

    })

}

userSearch()