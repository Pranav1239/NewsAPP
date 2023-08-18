import React, { Component } from "react";
import NewsMain from "./NewsMain";
import Spinner from "./Spinner";

export default class NewsSave extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: null,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=cbfee828e5c6420faf48521ca2ac8062&page=1&pageSize=${this.props.PageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false });
  }

  HandlePrevClick = async () => {
    console.log("Prev button");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=cbfee828e5c6420faf48521ca2ac8062&page=${
      this.state.page - 1
    }&pageSize=${this.props.PageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });

    this.setState({
      page: this.state.page - 1,
      loading: false,
    });
  };

  HandleNextClick = async () => {
    console.log("Next button");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=cbfee828e5c6420faf48521ca2ac8062&page=${
      this.state.page + 1
    }&pageSize=${this.props.PageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });

    this.setState({
      page: this.state.page + 1,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <h1>HamaraNews TopHeadlines</h1>

          {this.state.loading && <Spinner />}
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsMain
                    title={element.title ? element.title.slice(0, 55) : ""}
                    discription={
                      element.description
                        ? element.description.slice(0, 102)
                        : ""
                    }
                    imgurl={element.urlToImage ? element.urlToImage : ""}
                    NewsUrl={element.url}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-info"
            onClick={this.HandlePrevClick}
          >
            Prev
          </button>
          <button
            disabled={this.state.page >= 5}
            type="button"
            className="btn btn-info"
            onClick={this.HandleNextClick}
          >
            Next
          </button>
        </div>
      </>
    );
  }
}
