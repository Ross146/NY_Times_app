import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startLoadPageArticles, loadNews, toggleLoadStatus} from 'actions';

import expect from 'expect';

let createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
    let action = {
        type: 'LOAD_ARTICLES',
        page: 2,
        articles: []
    };

    let actionToggleStatus = {
        type: 'TOGGLE_LOAD_STATUS'
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
           expect(actions[1].type).toEqual(action.type);
           expect(actions[1].page).toEqual(action.page);
           expect(actions[1].articles.length).toEqual(10);
           done();
        }).catch(done);
    });

    it('should generate toggle load status action', () => {
        let res = toggleLoadStatus();
        expect(res).toEqual(actionToggleStatus);
    })
});