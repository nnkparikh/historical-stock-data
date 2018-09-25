iex.shell = (function(){
    var configMap = {
        main_html: String()
          + '<div class="top-bar">'
             + '<div class="random-triangle"> </div>'
             + '<div class="iex-view-text">IEXView</div>'
             + '<div class="links">'
                 + 'by'
                 + '<a class="link-to-me" href="https://neelparikh.net"> nparikh </a>'
                 + '<a class="link-to-github" href="https://github.com/nnkparikh/"> github </a>'
             + '</div>'
          + '</div>'
          + '<div class="content-wrapper">'
             + '<div class="side-bar">'
                 + '<a class="nav-stocks" href="/">Stocks</a>'
             + '</div>'
             + '<div class="main-content">'
             + '</div>'
          + '</div>'
    },
    stateMap = {
        container: null,
        symbols: null
    }, 
    elementMap = {}, 
    setElementMap,
    initModule;

    // DOM methods
    setElementMap = function(){
        var container = stateMap.container;
        elementMap = {
            container: container,
            search_ticker: container.querySelector('.main-content')
        };
    };

    // Public methods
    initModule = function(container){
        stateMap.container = container;
        container.innerHTML = configMap.main_html;
        setElementMap();
        iex.search_ticker.initModule(elementMap.search_ticker);
    };

    return {initModule: initModule};
}());