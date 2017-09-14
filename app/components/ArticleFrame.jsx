import React, {Component} from 'react';
import {connect} from 'react-redux';
import Iframe from 'react-iframe'

export class ArticleFrame extends Component {

    fildUrlById (id) {
        let {news} = this.props;
        return news.articles.find(x => x._id === id).web_url;
    }

    render () {
        let id = this.props.match.params.article;
        return (
            <div>
                <Iframe url={this.fildUrlById(id)}/>
            </div>

        )
    }
}

export default connect(
    (state) => {
        return state
    }
)(ArticleFrame)