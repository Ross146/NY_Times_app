import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startLoadPageArticles, loadNews} from 'actions';

import expect from 'expect';

let createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
    let action = {
        type: 'LOAD_ARTICLES',
        page: 2,
        articles: []
    };

    it('should generate load articles action', () => {
        let res = loadNews(action.page, action.articles);
        expect(res).toEqual(action)
    });

    it('should load articles and dispatch LOAD_ARTICLES', (done) => {
        const store = createMockStore({});
        const page = 2;

        store.dispatch(startLoadPageArticles(page)).then(() => {
           const actions = store.getActions();
           expect(actions[0].type).toEqual(action.type);
           expect(actions[0].page).toEqual(action.page);
           expect(actions[0].articles.length).toEqual(10);
           done();
        }).catch(done);
    })
});