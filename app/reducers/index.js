export let articlesReducer = (state = {page: 1, articles: [], last_pub_date: ''}, action) => {
    switch (action.type) {
        case 'LOAD_ARTICLES':
            let clone = Object.assign({}, action);
            clone.articles.forEach((item) => {
                item.headline = item.headline.main;
                let date = new Date(item.pub_date);
                item.pub_date = date.toLocaleString()
            });
            return {
                page: clone.page,
                articles: clone.articles,
                last_pub_date: clone.articles[0].pub_date
            };
        default:
            return state;
    }
};

export let filterByNewestReducer = (state = true, action) => {
    switch (action.type) {
        case 'TOGGLE_FILTER_BY_NEWEST':
            return !state;
        default:
            return state;
    }
};

export let loadStatusReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_LOAD_STATUS':
            return !state;
        default:
            return state;
    }
};