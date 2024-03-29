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
// search.addWidget(
//     instantsearch.widgets.currentRefinements({
//         container: '#current-refined-values'
//     })
// );

// initialize clearRefinements
search.addWidget(
    instantsearch.widgets.clearRefinements({
        container: '#clear-all',
        templates: {
            resetLabel: 'Clear all filters'
        }
    })
);

// initialize pagination
search.addWidget(
    instantsearch.widgets.pagination({
        container: '#pagination',
        // default is to scroll to 'body', here we disable this behavior
        scrollTo: false,
        showFirst: false,
        showLast: false,
        showPrevious: true
    })
);

// initialize hitsPerPage
// search.addWidget(
//     instantsearch.widgets.hitsPerPage({
//         container: '#hits-per-page',
//         items: [
//             { label: '6 posts per page', value: 6, default: true },
//             { label: '12 posts per page', value: 12 },
//         ]
//     })
// );

search.addWidget(
    instantsearch.widgets.configure({
        hitsPerPage: 6
    })
);

// initialize RefinementList
search.addWidget(
    instantsearch.widgets.menu({
        container: '#refinement-list',
        attribute: 'tags',
        showMore: true,
        limit: 10,
        sortBy: ['count:desc']
    })
);

// initialize sortBy
// search.addWidget(
//     instantsearch.widgets.sortBy({
//         container: '#sort-by',
//         items: [
//             { label: 'Most Recent', value: 'anthonydellavecchia' }, value should be the name of the index, in my case i only have 1 index (anthonydellavecchia). if i want, i can create another index that does some other type of sorting
//             { label: 'Oldest', value: 'anthonydellavecchia' }
//         ],
//     })
// );

// initialize SearchBox
search.addWidget(
    instantsearch.widgets.searchBox({
        container: '#search-box',
        placeholder: "Search for articles written by Anthony",
        autofocus: true
    })
);

// initialize hits widget
search.addWidget(
    instantsearch.widgets.hits({
        container: '#hits',
        templates: {
            empty: '<h3 style="text-align: center;">No results found 😔. Search something else.</h3>',
            item:
            `
                <section class="blog-page">
                    <div class="container">
                        <div class="row" id="blogSearch">
                            {{ range .Paginator.Pages }}
                            <div class="col-lg-12">
                                <div class="blog-page__item" style="margin-bottom: 5em !important;">
                                    <div class="blog-page__item-thumb" style="width: 100%;">
                                        <a id="purple-cursor" class="text-dark" href="{{ permalink }}">
                                            <img src="https://anthonydellavecchia.com/{{ image }}" alt="post-image">
                                        </a>
                                    </div>
                                    <div class="blog-page__item-content bg-white" style="margin: auto;width:100%; text-align: center; position: initial !important;">
                                        <span style="font-size: 1.2em;">{{ writtendate }} &bull;
                                            <a id="purple-cursor" href="{{ permalink }}#disqus_thread">Comments</a>
                                        </span>
                                        <h4 class="mb-0">
                                            <a id="purple-cursor" class="text-dark" href="{{ permalink }}">
                                                {{#helpers.highlight}}
                                                    { "attribute": "title", "highlightedTagName": "mark" }
                                                {{/helpers.highlight}}
                                            </a>
                                        </h4>
                                        <h6 style="margin-top: 1em; padding-top: 1em; color: #7e7e8a; border-top: 1px solid #7e7e8a;">
                                        [ {{tags}} ]
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            {{ end }}
                            {{ partial "pagination" .}}
                        </div>
                    </div>
                </section>
            `
        }
    })
);

search.use(insightsMiddleware);
search.start();

console.log(search);
