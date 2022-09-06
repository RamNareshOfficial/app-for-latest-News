import React, { Component } from 'react';

export class NewsItems extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (

            <div className="my-3">
                <div className="card">
                    <img src={!imageUrl ? "https://images.moneycontrol.com/static-mcnews/2022/03/fandosensexniftyderivative-2-770x433.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}<span className="top-0 badge bg-danger" style={{ display: "flex", position: "absolute", justifyContent: "flex-end", right: "0" }}>{source}</span></h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By: {author ? author : "Unknown"} Updated on: {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-secondary">Read more</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default NewsItems