import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom';
import Articles from './Articles.jsx'
import ArticleFrame from './ArticleFrame.jsx'



export default class AppRouter extends Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Articles}/>
                    <Route path='/:article' component={ArticleFrame}/>
                </Switch>
            </div>
        )
    }
}