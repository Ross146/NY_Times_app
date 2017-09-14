import React from 'react';
import expect from 'expect';

import {Articles} from 'Articles.jsx'

describe('Articles component', () => {
    it ('should exist', () => {
        expect(Articles).toExist()
    });
});