import {getArticlesPerPage} from 'api';

export let startLoadPageArticles = (page = 1) => {
    return(dispatch, getState) => {
        dispatch(toggleLoadStatus());
        return getArticlesPerPage(page).then((articles) => {
            dispatch(loadNews(page, articles));
            dispatch(toggleLoadStatus());
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

export let toggleLoadStatus = () => {
    return {
        type: 'TOGGLE_LOAD_STATUS'
    }
};