import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export class ArticleItem extends Component {
    render() {
        let {snippet, _id, headline, pub_date} = this.props;
        return (
            <li className="articles__item">
                <Link to={`/${_id}`}>
                    <span className="articles__item__date">{pub_date}</span>
                    <span className="articles__item__headline">{headline}</span>
                    <span className="articles__item__snippet">{snippet}</span>
                </Link>
            </li>
        )
    }
}

export default connect()(ArticleItem);