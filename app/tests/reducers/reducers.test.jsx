import expect from 'expect';
import {articlesReducer, loadStatusReducer, filterByNewestReducer} from 'reducers';

describe('Reducers', () => {
    describe('loadArticlesReducer', () => {
        let action = {
            type: 'LOAD_ARTICLES',
            page: 2,
            articles: [{
                web_url: 'ny-times.com',
                snippet: 'example snippet',
                headline: {
                    main: 'example headline'
                },
                _id: '123',
                pub_date: '2017-09-11T09:18:31+0000'
            }, {
                web_url: 'ny-times.com',
                snippet: 'example snippet',
                headline: {
                    main: 'example headline'
                },
                _id: '124',
                pub_date: '2017-09-11T09:18:31+0000'
            }]
        };

        let actionToggleStatus = {
            type: 'TOGGLE_LOAD_STATUS'
        };

        let actionToggleFilterNewest = {
            type: 'TOGGLE_FILTER_BY_NEWEST'
        };

        it('should set page', () => {
            let res = articlesReducer({}, action);
            expect(res.page).toEqual(action.page)
        });

        it('should set articles', () => {
            let res = articlesReducer({}, action);
            expect(res.articles).toEqual(action.articles)
        });

        it('should toggle load status', () => {
            let status = false;
            let res = loadStatusReducer(status, actionToggleStatus);
            expect(res).toEqual(!status);
        });

        it('should toggle filter by newest', () => {
            let status = true;
            let res = filterByNewestReducer(status, actionToggleFilterNewest);
            expect(res).toEqual(!status);
        })
    })
});