import {getArticlesPerPage} from 'api';

export let startLoadPageArticles = (page = 1) => {
    return(dispatch, getState) => {
        return getArticlesPerPage(page).then((articles) => {
            dispatch(loadNews(page, articles));
        });
    }
};

export let loadNews = (page, articles) => {
    return {
        type: 'LOAD_ARTICLES',
        page,
        articles
    }
};