import React, {Component} from 'react'
import {connect} from 'react-redux'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ArticleItem from './ArticleItem.jsx'
import {startLoadPageArticles} from 'actions';

export class Articles extends Component {
    componentDidUpdate() {
        let {news} = this.props;
        if (news.page == 1) {
            window.history.pushState('', '', '/')
        } else {
            window.history.pushState('', '', `/?page=${news.page}`)
        }
    }

    componentWillMount() {
        let searchParams = new URLSearchParams(window.location.search);
        let page = searchParams.get('page');
        if (page > 1) {
            this.props.dispatch(startLoadPageArticles(page));
        } else {
            this.props.dispatch(startLoadPageArticles());
        }
    }

    render() {
        let {news, loadStatus} = this.props;
        let renderArticles = () => {
            return news.articles.map((newsItem) => {
                return (
                    <ArticleItem key={newsItem._id} {...newsItem}/>
                )
            })
        };
        return (
            <div className={(loadStatus ? 'mask' : '')}>
                <Header/>
                <div className='row articles column'>
                    {renderArticles()}
                </div>
                <Footer/>
            </div>
        )

    }
}

export default connect(
    (state) => {
        return state
    }
)(Articles)