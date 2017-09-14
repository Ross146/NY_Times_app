import React, { Component } from 'react';
import {connect} from 'react-redux'

export class Footer extends Component {
    render () {
        let {news} = this.props;
        return (
            <footer className="footer">
                <div className="row">
                    <div className="medium-9 column">
                        <span className="footer__text">
                            Last published article at {news.last_pub_date}
                        </span>
                    </div>
                    <div className="medium-3 column">
                        <span className="footer__text float-right">
                            NY Times 2017
                        </span>
                    </div>
                </div>
            </footer>
        )
    }
}

export default connect(
    (state) => {
        return state
    }
)(Footer)