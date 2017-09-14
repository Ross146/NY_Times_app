import React from 'react'
import expect from 'expect'
import $ from 'jquery'
import TestUtils from 'react-addons-test-utils'

import {Header} from 'Header.jsx'

describe('Header component', () => {
    it('should exist', () => {
        expect(Header).toExist()
    });

    // it ('should dispatch LOAD_ARTICLES on select change', () => {
    //     let spy = expect.createSpy();
    //     let news = {
    //         page: 2
    //     }
    //     let header = TestUtils.renderIntoDocument(<Header news={news} dispatch={spy}/>);
    //
    //     header.refs.pageSelect.value = 2;
    //     TestUtils.Simulate.change(3);
    //
    //     expect(spy).toNotHaveBeenCalled()
    // })
});