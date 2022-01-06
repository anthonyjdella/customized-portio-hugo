const search = instantsearch({
    indexName: 'anthonydellavecchia',
    routing: true,
    searchClient: algoliasearch(
        'HPDLDN6WYS',
        '6ca860e96696c35d0e40c3315f2cb1e4'
    )
});

// insights for analytics, but since client is null this doesnt work
const insightsMiddleware = instantsearch.middlewares.createInsightsMiddleware({
    insightsClient: null
});

 // initialize currentRefinements
search.addWidget(
    instantsearch.widgets.currentRefinements({
        container: '#current-refined-values',
        clearAll: false
    })
);

// initialize clearRefinements
search.addWidget(
    instantsearch.widgets.clearRefinements({
        container: '#clear-all',
        templates: {
        link: 'Reset everything'
    },
    autoHideContainer: false
    })
);

// initialize pagination
search.addWidget(
    instantsearch.widgets.pagination({
        container: '#pagination',
        maxPages: 20,
        // default is to scroll to 'body', here we disable this behavior
        scrollTo: false
    })
);

// initialize RefinementList
search.addWidget(
    instantsearch.widgets.refinementList({
        container: '#refinement-list',
        attribute: 'tags'
    })
);

// initialize SearchBox
search.addWidget(
    instantsearch.widgets.searchBox({
        container: '#search-box',
        placeholder: "Search Articles written by Anthony"
    })
);

// initialize hits widget
search.addWidget(
    instantsearch.widgets.hits({
        container: '#hits',
        templates: {
            empty: 'No results',
            item: '<article><p>Title: {{#helpers.highlight}}{ "attribute": "title", "highlightedTagName": "mark" }{{/helpers.highlight}}</p></article>'
        }
    })
);

search.use(insightsMiddleware);
search.start();

console.log(search);
