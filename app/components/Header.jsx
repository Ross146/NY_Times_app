import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import AppConfig from 'AppConfig'
import * as actions from 'actions'

export class Header extends Component {
    handleFilter (e) {
        e.preventDefault();
        let {dispatch} = this.props;
        dispatch(actions.toggleFilterByNewest())
    }
    handleSelect () {
        let {dispatch} = this.props;
        let value = this.refs.pageSelect.value;
        dispatch(actions.startLoadPageArticles(value));
    }
    render () {
        let {news, filterByNewest} = this.props;
        let generateOptions = () => {
            let options = [];
            for (let i = 1; i <= AppConfig.app.maxPages; i++) {
                options.push(<option key={i} value={i}>Page {i}</option>);
            }
            return options;
        };

        return (
            <header className="header">
                <div className="row">
                    <div className="header__logo small-full column">
                        <a href="https://www.nytimes.com">
                            <img src="/images/logo.png" alt="logo"/>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="medium-7 small-full column">
                        <ul className="menu header__menu-hover-lines">
                            <li className="active">
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <a href="https://www.nytimes.com">Ny Times Official</a>
                            </li>
                        </ul>
                    </div>
                    <div className="medium-2 small-full column header__filter">
                        <a href="#" onClick={this.handleFilter.bind(this)}>filter {(filterByNewest ? 'oldest': 'newest')}</a>
                    </div>
                    <div className="medium-3 small-full column">
                        <form>
                            <select className="header__page-select" ref="pageSelect" value={news.page} required onChange={this.handleSelect.bind(this)}>
                                {generateOptions()}
                            </select>
                        </form>
                    </div>

                </div>

            </header>
        )
    }
}

export default connect(
    (state) => {
        return state
    }
)(Header)