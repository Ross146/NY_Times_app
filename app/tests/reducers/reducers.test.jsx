import expect from 'expect';
import {articlesReducer} from 'reducers';

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
                pub_date: "2017-09-11T09:18:31+0000"
            }, {
                web_url: 'ny-times.com',
                snippet: 'example snippet',
                headline: {
                    main: 'example headline'
                },
                _id: '124',
                pub_date: "2017-09-11T09:18:31+0000"
            }]
        };

        it('should set page', () => {
            let res = articlesReducer({}, action);
            expect(res.page).toEqual(action.page)
        });

        it('should set articles', () => {
            let res = articlesReducer({}, action);
            expect(res.articles).toEqual(action.articles)
        });
    })
});