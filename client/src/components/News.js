import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class News extends Component {

    componentWillMount() {
        this.props.fetchNews();
    }

    renderFeature() {
        return this.props.news.map(newsItem => {
            return <li key={newsItem.title}>{newsItem.title}</li>;
        })
    }

    render() {
        if (!this.props.news) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h4>News</h4>
                <ul>
                    {this.renderFeature()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { news: state.news.newsItems }
}

export default connect(mapStateToProps, actions)(News);
