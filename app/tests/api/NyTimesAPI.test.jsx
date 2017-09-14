import expect from 'expect';
let api = require('api');

describe('NyTimesAPI', () => {
    it('should exist', () => {
        expect(api).toExist()
    });

    // describe('Tests response', () => {
    //     it('should contain 10 articles per page in response', (done) => {
    //         api.getArticlesPerPage().then((docs) => {
    //             if (docs.length === 10) done()
    //         })
    //     })
    // })

});