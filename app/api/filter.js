export let filterArticles = (articles, filterByNewest) => {
    return filterByNewest? articles : articles.slice(0).reverse()
};