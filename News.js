import React, { Component } from "react";
import NewsItems from './Newsitems';
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import InfinitScroll from 'react-infinite-scroll-component';


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 5,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.firstLetterUpperCase(this.props.category)} news at- NewsSpot`;
    }
    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eecfbde542cd4caa8a9368ddbecb3da8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        })
    }

    async componentDidMount() {
    this.updateNews();
    }

    fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eecfbde542cd4caa8a9368ddbecb3da8&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({page: this.state.page + 1})    
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    firstLetterUpperCase = (string) => {
        return string.slice(0, 1).toUpperCase() + string.slice(1);
    }



    render() {
        return (
        <>
                <h1 className="text-center my-5">NewsSpot: {this.firstLetterUpperCase(this.props.category)} top news </h1>
                {this.state.loading && <Spinner />}
                <InfinitScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                    </InfinitScroll>
         </>       
                )
    }
}

export default News